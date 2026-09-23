#!/usr/bin/env python3
"""Serve only the Hikari progress tracker on a specified private interface."""

import argparse
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", required=True)
    parser.add_argument("--port", type=int, default=6420)
    parser.add_argument("--file", type=Path, required=True)
    return parser.parse_args()


def make_handler(tracker_file):
    class TrackerHandler(BaseHTTPRequestHandler):
        def do_GET(self):
            if self.path.split("?", 1)[0] not in {"/", "/tracker"}:
                self.send_error(404)
                return

            payload = tracker_file.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(payload)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(payload)

        def log_message(self, format_string, *args):
            print(f"{self.address_string()} - {format_string % args}")

    return TrackerHandler


def main():
    args = parse_args()
    tracker_file = args.file.resolve()
    if not tracker_file.is_file():
        raise SystemExit(f"Tracker file not found: {tracker_file}")

    server = ThreadingHTTPServer((args.host, args.port), make_handler(tracker_file))
    print(f"Serving {tracker_file} at http://{args.host}:{args.port}/tracker", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
