#!/usr/bin/env python
# Copyright 2018-2022 Snowflake Computing Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import re
import subprocess
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
LICENSE_TEXT = (SCRIPT_DIR / "license-template.txt").read_text().splitlines()[0]
print("LICENSE_TEXT=", repr(LICENSE_TEXT))
git_files = sorted(
    subprocess.check_output(["git", "ls-files", "--no-empty-directory"])
    .decode()
    .strip()
    .splitlines()
)

IGNORE_PATTERN = re.compile(
    r"^.github"  # Exclude CI files
    r"|\.(?:png|gif|ttf|woff|otf|eot|woff2|ico|svg)$"  # Exclude images
    r"|LICENSE$"  # Exclude LICENSE
    r"|NOTICES$"  # Exclude NOTICES
    r"|\.json$"  # Exclude json, because it doesn't support comments
    r"|/yarn\.lock$"  # Exclude generated files
    r"|/(fixtures|__snapshots__|vendor|test_data|data)/"  # Exclude fixtures data
    r"|py\.typed$"
    "|.prettierrc$",
    re.IGNORECASE,
)
invalid_files_count = 0
for fileloc in git_files:
    if IGNORE_PATTERN.search(fileloc):
        continue
    filepath = Path(fileloc)
    # Exclude submodules
    if not filepath.is_file():
        continue

    try:
        file_content = filepath.read_text()
        if LICENSE_TEXT not in file_content:
            print(fileloc)
            invalid_files_count += 1
    except:
        print("Invalid encoding: ", fileloc)
        invalid_files_count += 1

print("Invalid files count:", invalid_files_count)
if invalid_files_count > 0:
    sys.exit(1)
