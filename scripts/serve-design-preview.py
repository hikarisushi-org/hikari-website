#!/usr/bin/env python3
"""Serve the Hikari design preview and its approved local assets privately."""

import argparse
import mimetypes
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", required=True)
    parser.add_argument("--port", type=int, default=6421)
    parser.add_argument("--root", type=Path, required=True)
    parser.add_argument("--preview", type=Path, required=True)
    return parser.parse_args()


def make_handler(root, preview_file):
    assets_root = (root / "assets").resolve()

    class PreviewHandler(BaseHTTPRequestHandler):
        def do_GET(self):
            request_path = unquote(urlsplit(self.path).path)
            if request_path in {"/", "/preview"}:
                self._send_file(preview_file, "text/html; charset=utf-8")
                return

            if request_path.startswith("/assets/"):
                candidate = (root / request_path.lstrip("/")).resolve()
                if candidate.is_relative_to(assets_root) and candidate.is_file():
                    self._send_file(candidate)
                    return

            self.send_error(404)

        def _send_file(self, path, content_type=None):
            payload = path.read_bytes()
            guessed_type = content_type or mimetypes.guess_type(path.name)[0] or "application/octet-stream"
            self.send_response(200)
            self.send_header("Content-Type", guessed_type)
            self.send_header("Content-Length", str(len(payload)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(payload)

        def log_message(self, format_string, *args):
            print(f"{self.address_string()} - {format_string % args}")

    return PreviewHandler


def main():
    args = parse_args()
    root = args.root.resolve()
    preview_file = args.preview.resolve()
    if not preview_file.is_file() or not preview_file.is_relative_to(root):
        raise SystemExit(f"Invalid preview file: {preview_file}")

    server = ThreadingHTTPServer((args.host, args.port), make_handler(root, preview_file))
    print(f"Serving design preview at http://{args.host}:{args.port}/preview", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
