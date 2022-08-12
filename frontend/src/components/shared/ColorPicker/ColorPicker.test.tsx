import React from "react"
import { StyledColorPicker } from "src/components/shared/ColorPicker/styled-components"
import { mount, shallow } from "src/lib/test_util"
import { StatefulPopover as UIPopover } from "baseui/popover"
import { ChromePicker } from "react-color"

import ColorPicker, { Props } from "./ColorPicker"

const getProps = (props: Partial<Props> = {}): Props => ({
  label: "Label",
  value: "#000000",
  width: 0,
  disabled: false,
  onChange: jest.fn(),
  ...props,
})

describe("ColorPicker widget", () => {
  const props = getProps()
  const wrapper = shallow(<ColorPicker {...props} />)
  const colorPickerWrapper = wrapper
    .find(UIPopover)
    .renderProp("content")({ close: () => {} })
    .find(ChromePicker)
  it("renders without crashing", () => {
    expect(wrapper.find(UIPopover).length).toBe(1)
    expect(colorPickerWrapper.find(ChromePicker).length).toBe(1)
  })

  it("should render a label in the title", () => {
    const wrapper = mount(<ColorPicker {...props} />)
    const wrappedDiv = wrapper.find("StyledColorPicker")
    expect(wrappedDiv.find("StyledWidgetLabel").text()).toBe(props.label)
  })

  it("should have correct style", () => {
    const wrappedDiv = wrapper.find("StyledColorPicker")
    const { style } = wrappedDiv.props()

    // @ts-ignore
    expect(style.width).toBe(getProps().width)
  })

  it("should render a default color in the preview and the color picker", () => {
    wrapper.find(UIPopover).simulate("click")
    const chromePickerWrapper = wrapper
      .find(UIPopover)
      .renderProp("content")({ close: () => {} })
      .find(ChromePicker)

    expect(wrapper.find("StyledColorBlock").prop("style")).toEqual({
      backgroundColor: "#000000",
      opacity: "",
    })

    expect(chromePickerWrapper.prop("color")).toEqual("#000000")
  })

  it("supports hex shorthand", () => {
    wrapper.find(UIPopover).simulate("click")

    // @ts-ignore do not need change event added
    colorPickerWrapper.prop("onChange")({
      hex: "#333",
    })

    expect(
      wrapper
        .find(UIPopover)
        .renderProp("content")({ close: () => {} })
        .find(ChromePicker)
        .prop("color")
    ).toEqual("#333")
  })

  it("should update the widget value when it's changed", () => {
    const newColor = "#E91E63"
    wrapper.find(UIPopover).simulate("click")

    // @ts-ignore do not need change event added
    colorPickerWrapper.prop("onChange")({
      hex: newColor,
    })

    expect(
      wrapper
        .find(UIPopover)
        .renderProp("content")({ close: () => {} })
        .find(ChromePicker)
        .prop("color")
    ).toEqual(newColor)
  })

  it("should disable alpha property for now", () => {
    wrapper.find(UIPopover).simulate("click")
    expect(colorPickerWrapper.prop("disableAlpha")).toStrictEqual(true)
  })
})

describe("ColorPicker widget with optional params", () => {
  it("renders with showValue", () => {
    const props = getProps({ showValue: true })
    const wrapper = shallow(<ColorPicker {...props} />)
    expect(wrapper.find("StyledColorValue").exists()).toBe(true)
  })

  it("renders without showValue", () => {
    const props = getProps()
    const wrapper = shallow(<ColorPicker {...props} />)
    expect(wrapper.find("StyledColorValue").exists()).toBe(false)
  })

  it("should render TooltipIcon if help text provided", () => {
    const props = getProps({ help: "help text" })
    const wrapper = shallow(<ColorPicker {...props} />)
    expect(wrapper.find("TooltipIcon").prop("content")).toBe("help text")
  })
})

describe("ColorPicker error handler", () => {
  it("swallows SecurityErrors", () => {
    const props = getProps({})
    const wrapper = shallow(<ColorPicker {...props} />)
    wrapper
      .find(StyledColorPicker)
      .simulateError({ name: "SecurityError", message: "", stack: [] })

    // We swallow SecurityErrors, so after an error is thrown we
    // should not get unmounted
    expect(wrapper.find(UIPopover).length).toBe(1)
  })

  it("re-throws non-SecurityErrors", () => {
    const mockError = new Error("")

    expect(() => {
      const props = getProps({})
      const wrapper = shallow(<ColorPicker {...props} />)
      wrapper.find(StyledColorPicker).simulateError(mockError)
    }).toThrowError(mockError)
  })
})
