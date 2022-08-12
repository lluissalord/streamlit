/**
 * Copyright 2018-2022 Snowflake Computing Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import { IDeployErrorDialog } from "./types"

function UncommittedChanges(repository: string): IDeployErrorDialog {
  const repoName = repository
    .split("/")
    .slice(1)
    .join("/")

  return {
    title: "Unable to deploy app",
    body: (
      <>
        <p>
          Your repository <code>{repoName}</code> has uncommitted changes.
        </p>
        <p>Please commit the latest changes and push to GitHub to continue.</p>
      </>
    ),
  }
}

export default UncommittedChanges
