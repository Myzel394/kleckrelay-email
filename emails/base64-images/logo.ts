const logo =
	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACfCAMAAACLDWbjAAADAFBMVEVHcEzLy79dV0xEPzJMSUJoZV5dXFqOjYympaN3dXJVVVSLioVxcXE5ODQzMjAQJ3kPJnklJCEwLy8rKy4JBQQQDw4ZPZoPJngQJnciMmoZGBkgMGgKCgoXFxkSEhYLCw0ZK24UKXQMCwkPJngQKHgQJncbLGgXKm4HCAwJChASKXoPJngQJngQJ3YSJ3cICAkbQ6wFBQQPJncQJnUPJncHBwcQERUWLHYRKHoMCwsQJngVLHoQJncRJ3QQJncSJ3AQJnYEBAMPJncTJ3MQKHcLCwsPJnYSKXcRKHYQJ3YEAwMRKHkFBQUVKXESKHoEBAMQLZMPJXMTL40WGB0PJncQJncQJncUJWIbRK0SLo8EAwMUMY4SL5AbQqYEBAMPJngQJngQLZMZP6EQJngaQqkQJncTMpUSKXIaQqkHCxcTMI8RLo8bQqcaP6AJEysVN5QOIm0QJncRLZERLZEKG1QRLI8cQaIbQ6oIDyIaQaMQJnQOIE0SLY4PJFgWOJgQJncMHl4QKIAQJnUbRK0QJnYQJncPJnUQJngPJnYbRK4PJXUQJnQQJXMPJXMPJXIOI24PJHAPI2sNIGAQJXQPJG4PJG8PI2oOJnkOJngOIWQOIWYQJXEPI2wPJncOImgOJHIPJG0LGU0OIWUNH14OImkLGUsPJXEMHFMKGEkPJHEPJXAMHVgOImcLHVwVM4sMG1AOIGEMHVcUM4sOIWMLHl8NH18MHFUQJnMNIGMLGk4NHlwPJ38QLI4PI20QJG8QK4wOJ3wbRa4QJG4NHloOIWcKF0YMIWgPKIEMG1IQKocQJnkQKogbQ6wPJGwQLZEQKWkaQ6sQLJAPKYQPI2kYPqAaQacOJXQaQqkWOJMXOpgPKYUQK4oOIWIZP6ISLXsVNpAMIGYXO5oUMoUYPJ0ZQKULH2ISLn8PImUVM4kQKHITMIIPJW8QJG0aQqgNImwRK3kNImoQK4sQKXUQJmkVNY0RKXMQLZMRKG8PJWYQJm0RLIcSKnYRLZQQK4IAAgBHcEy8jUWyAAABAHRSTlMAAQEDAgIDAQEBBAIDBAUf2ggGBxYPjP35CAoNHwwOGxUoFPSJuxAYMCM+8OqSTyv4NeJisyYRJIISyS2YeMI5cUGoM6MYz0RcVVZpPBxKR/OdWAmtfeYh/btPcNdrOdfe/NnY5NKnR/BLheqBh2rGzNTh+r6NU9JXu/6Con7s2LSi/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v////8APyV6igAAGcVJREFUeNrsmntMVHcWx+feuc95WRitgIooVhexxlSDtdhqrHU1jaYr7mqjxjXb1s26m33Fmt0/NtmZgZnhVWDwAQLLii8eqSgZVwURYQ3iK4rUJ2pEI2ptml2rbl1N9pzzuzOC2pbH5eGGE2OI8Q8++Z7vef2uwTAQAzEQAzEQL1dwivL/ASKrssIpqoF7ibXgOAUgZEXmeRV51JdOBPjdVYaBP/G8LKsUL1GayYoCGsiqIpshFE4VBUGEEEQVqXiF03xD/68fJ5NiNqtm+LXNFotFNJtF4hC0UOGXVzgzQsgc/qjK/dI5ioq/vkWSjEajZDWZTBKGUQtShnQCVsgyEgikU/j+poYsWiSrDSPUFhpqs1ltAvyrZDMZjVbGIomEAX8rMuYgZpvMyTzXv+QQjDabPSQkIYTCbg8NiV+4dME4o9VmZYEokkUC0cg96BLwEhQD+KsfFSqRB5KEiBEsIiISon71h5WPP/jtwrFG1MdGOJBuFgIRRVSFKpqigjJKf1FF5o1TP13+6dTIuLhpcXFDIiNHxK1Z+eDBg8ePP/hkfILNHkowVhOgcGbJbBAtLMdUFVoMcABT/zCIGr587aQlk9YuXzx68ODBo0dPG7Jg9UkMgFm9Jj401G5nMKbw8WNmTZ8bZcAsw7IsohzYLvtFBeNMyyc5MSb9aeHwkSNHvvfe6DFVVVWnTzKYZUvnhzLf2MaOmeB2u8NeWxDOWcAyEpYyRSXnc32PIhviP3Jq8ctPVsUMHz585F8vHaxCltNIs/LDhVH2hIQQu21mWGJiIqDE/uRdkxlUsUBZNgMDTgNyXzd+TjQsXxIAObTko1dnxMTEzGo4dulfBzWYkyfBKiNCEuyL5yRSuN0b3/jpIF7EKgYo6HdV4YCnLwcyTpGEXzvbxJK1S38UM6vxYsMxYKmq0lhWrxmVYFsV64JgKEPfmjyWk0zQ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"

export default logo
