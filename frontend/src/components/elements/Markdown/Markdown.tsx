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

import StreamlitMarkdown from "src/components/shared/StreamlitMarkdown"
import React, { ReactElement } from "react"
import { Markdown as MarkdownProto } from "src/autogen/proto"

export interface MarkdownProps {
  width: number
  element: MarkdownProto
}

/**
 * Functional element representing Markdown formatted text.
 */
export default function Markdown({
  width,
  element,
}: MarkdownProps): ReactElement {
  const styleProp = { width }
  return (
    <div className="stMarkdown" style={styleProp}>
      <StreamlitMarkdown
        isCaption={element.isCaption}
        source={element.body}
        allowHTML={element.allowHtml}
      />
    </div>
  )
}
