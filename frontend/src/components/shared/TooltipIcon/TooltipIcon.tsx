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

import React, { ReactElement, ReactNode } from "react"
import Tooltip, { Placement } from "src/components/shared/Tooltip"
import { HelpCircle as HelpCircleIcon } from "react-feather"
import StreamlitMarkdown, {
  StreamlitMarkdownProps,
} from "src/components/shared/StreamlitMarkdown"
import { useTheme } from "@emotion/react"
import { Theme } from "src/theme"
import { StyledTooltipIconWrapper } from "./styled-components"

export interface TooltipIconProps {
  placement?: Placement
  iconSize?: string
  content: string
  children?: ReactNode
  markdownProps?: Partial<StreamlitMarkdownProps>
}

function TooltipIcon({
  placement = Placement.AUTO,
  iconSize = "16",
  content,
  children,
  markdownProps,
}: TooltipIconProps): ReactElement {
  const theme: Theme = useTheme()
  return (
    <StyledTooltipIconWrapper className="stTooltipIcon">
      <Tooltip
        content={
          <StreamlitMarkdown
            style={{ fontSize: theme.fontSizes.sm }}
            source={content}
            allowHTML={false}
            {...(markdownProps || {})}
          />
        }
        placement={placement}
        inline
      >
        {children || <HelpCircleIcon className="icon" size={iconSize} />}
      </Tooltip>
    </StyledTooltipIconWrapper>
  )
}

export default TooltipIcon
