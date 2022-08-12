import { handleFavicon } from "./Favicon"

function getFaviconHref(): string {
  const faviconElement: HTMLLinkElement | null = document.querySelector(
    "link[rel='shortcut icon']"
  )
  return faviconElement ? faviconElement.href : ""
}

document.head.innerHTML = `<link rel="shortcut icon" href="default.png">`

const PIZZA_TWEMOJI_URL = "https://twemoji.maxcdn.com/2/72x72/1f355.png"
const SATELLITE_TWEMOJI_URL = "https://twemoji.maxcdn.com/2/72x72/1f6f0.png"
const CRESCENT_MOON_TWEMOJI_URL =
  "https://twemoji.maxcdn.com/2/72x72/1f319.png"

test("is set up with the default favicon", () => {
  expect(getFaviconHref()).toBe("http://localhost/default.png")
})

describe("Favicon element", () => {
  it("should set the favicon in the DOM", () => {
    handleFavicon("https://streamlit.io/path/to/favicon.png")
    expect(getFaviconHref()).toBe("https://streamlit.io/path/to/favicon.png")
  })

  it("should accept /media urls from backend", () => {
    handleFavicon("/media/1234567890.png")
    expect(getFaviconHref()).toBe("http://localhost/media/1234567890.png")
  })

  it("should accept emojis directly", () => {
    handleFavicon("🍕")
    expect(getFaviconHref()).toBe(PIZZA_TWEMOJI_URL)
  })

  it("should handle emoji variants correctly", () => {
    handleFavicon("🛰")
    expect(getFaviconHref()).toBe(SATELLITE_TWEMOJI_URL)
  })

  it("should handle emoji shortcodes containing a dash correctly", () => {
    handleFavicon(":crescent-moon:")
    expect(getFaviconHref()).toBe(CRESCENT_MOON_TWEMOJI_URL)
  })

  it("should accept emoji shortcodes", () => {
    handleFavicon(":pizza:")
    expect(getFaviconHref()).toBe(PIZZA_TWEMOJI_URL)
  })

  it("should update the favicon when it changes", () => {
    handleFavicon("/media/1234567890.png")
    handleFavicon(":pizza:")
    expect(getFaviconHref()).toBe(PIZZA_TWEMOJI_URL)
  })
})
