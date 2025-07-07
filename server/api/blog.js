export default defineCachedEventHandler(async () => {
    return {
        newsletter: [
            {
                id: 1,
                title: `Il Becco dell'oca`,
                author: {
                    name: `Paolo dell'Oca`,
                    profile_img: 'https://s3-alpha-sig.figma.com/img/19d5/5775/164a5e92324e9768bf7a92c89bf61dea?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Eq0XVOifo9pUaobiLNyK-6XUFA4OdLZ8V22G1y3RSUqUaOEHbjIBD2PO7YBIdWQG2wgbtd6XBz1u4ZUdqV9itM-EupNHq-E3f9BGrHlF5pxCwpQDUxLx-vgmACn4XK2~5fzDdKee2KzhE5M-ymODGfCP50GaBxwfRGsv6C-U1LdhSB6rEherDduo1-y0k6ofxul4e7TLC95OV6pMgahSGSznupvNnZzanX8ERtx684lOXitxk54Uw1RvJ93nwmxV1-t1NRmDXU~-L~eV6WZjuweQvVGIAxzfXXsYuxVHQQDETQm1hlKsHgqdCcbGzV7I3Kn76jUGkT9jQ-9Wz7YGHg__'
                }
            },
            {
                id: 2,
                title: `Disarmato`,
                author: {
                    name: `Pasquale Pugliese`,
                    profile_img: 'https://s3-alpha-sig.figma.com/img/c13e/0d30/e5d598e12583e9f123978b8a5f9f7e4e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qCGUPEYLCYVNCjOqS~D7-qcAHlF7hxisWCqtb6Aftfr1UlxZkwHYp3zhu3mrfCp9MDyWbrefHaBw~14kbJXq1sU2nACeeY7WRl6y16d3mrIGNVt1PgdhbU0Y61PQdy~aCmrIhshJh81~B2ZPGf-f~f2otbC71G3an0uq96BxKNzTdkoihRX6ic0HTIX0~AwQA2s88Bu83Omiu~r2iTEmUkw9Al-GYiCJ873mCTHVxCzSnZk0rHCBOclMc0dE1WQ5-NfdSYW~7Y0EIgnWDuEmbtl9MrAthRbmws5P36HvDU-HiMnUzZ-ebQ2PKkN0W6pxBzZs42hedWFEwV5EvbPdQQ__'
                }
            },
            {
                id: 3,
                title: `Battitiperminuto`,
                author: {
                    name: `Lorenzo Maria Alvaro`,
                    profile_img: 'https://s3-alpha-sig.figma.com/img/5565/b305/8a13e831ddd24d244ee19136115a1a88?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t5UEUWrh-RhV-P4Xlhg3kkAVmqEO454-gXjH0UzrH9zNP9c83YTL38JY0mmpjoAqgTK2n8a~1vQt7AGRYyVSSW3sQztjyzcrK-CU8SdkXiY2OKkZRwTK9Ke2Dr9HZQtRH15oP7CqDxjPiPrqre7ApwoN4d9IMtifG-t5MovTMJrFjhuj7OmFzoViLLfJAFulRBQDhu8~1YE2jNoIMs297MLvkFdLB4LhWKYfP08RnXbX96Jxf0CAt4Pp9Bbi05yl5bwSBkwXpji6BIA4fLtDxOfW28prfStAAn8YC2Kb3fxIrFEyPdATy935qYGHLsjS2CgyMQaf5dqaW0oqw0TU-A__'
                }
            },
            {
                id: 4,
                title: `La Zanzarella`,
                author: {
                    name: `Elena Zanella`,
                    profile_img: 'https://s3-alpha-sig.figma.com/img/6a95/b44e/a5384e3f4971ef4bc7770735bec808d0?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qZ7M36q3T59tIJ3UTig-a8j50X6pzTgS3pvk2Gq4OT4KWKIZX7to00XcXKB9l1RMP7Xk8~8HN8UrSCK1SzJfOglLdrR1xY8EudXvm8BZ6ee6~Lxfpu4myndAgP4USt8~qD0svgov-Ugh0yIo~~RgEhLj9fbsELiWQBx65J2bXVuCnT1M06kJbSdi1cck9EnPxFKlDF7XOJ8zBfs2J~EH8K9zFhUVm9~FF~rwQnkUpgGTK~5~Gi7aPz~Gi3RGfw0yp6wL28-3ftYFn1rInDv2A8nVSjkfOCMYi6dHsF-FlJC3VNfgo61av93aD-MIQ3WhTpnHfv~lnjS4bbcpV-wd9Q__'
                }
            },
            {
                id: 5,
                title: `Impact Q&A`,
                author: {
                    name: `Laura Orestano`,
                    profile_img: 'https://s3-alpha-sig.figma.com/img/1a65/c1f0/533226d5c767cd58ca07b1bcdd16c00a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WnayJjmWor~Rexo9xEXkoVAg7POYb4nIqjtrqzfO1eHkQFfnE-BhZIFk9CfWIwqnqoJuhENpiAQkmb35zHP5m9bMh~kapdl20Kq4T8h4JdkFr71fToAjWgsdfE61tyDpD9w2b2H0-pi~afI-2N1frg4R~shLt7b5wKldeb4t0YksRHwNOzMbnGFzaEe0HvATH7sHLc-an8P9AEwOa0ZQN5sAJpreGRJTGuocIgshgPWV1KOj3Ko5jje6JFLouYLhqORXTTiWijBpY7Rpmh6Q9d0Ff~K2jSj~BeGYtclr91A5ErkGRkEJr9BcsVxIwg5B~4JwOHXZAgkMILYuSnclYQ__'
                }
            }
        ]
    }
})