export default defineEventHandler(async () => {
  return {
    articles: [
      {
        id: 1,
        title: `Roccella Jonica, la Lampedusa che l'Italia ignora`,
        tag: {
          label: "Migranti",
          color: "#FFFFFF",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/4ed2/a214/44146596a39e532d863a717f24411c63?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VqVJbcxappd7DUEMaBXbsCAN5BSfemHoJ3KJY6ycekyTqXrhR3qzAfcU~MIiaiWKq1u-9a5K2ActWR2uigwsDYFOikztDhwQ6G6dk9GaNoZrXNmkiR2pFgdJ4JMAVXnUNsA2f8puP7rRvz7wlp89HGZRBj4oYSrHBRpRjFvCayAdRcaHzT0IGUuABANtJW4~O4QVJADH4N58qs4Gj9juPzZ3XU~jBvifNrp92o61vYgo13zyDwT7fi99pAR9zjwSFtUmjNmVrBeEzdh1d7m4PrNVlTzH1lOO7camLys84ZCunSv3-BSdCPJS0ujnUWpyZcQjcZ1NVkJ5g5CfwrkZbQ__",
        author: {
          name: "Alessandro Puglia",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/d518/a92d/e059a7a3367ff920d07e1938b4e8cd8f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ChsjmqjqnABwMOafW748YLYGkh9lQnqZ8WCCFOEr7b4nDpnoa-6kNR2waXbmth2Ii1xNVCFtYdoiP74RlHJWdgYJPg3NM10z2Y4C0bwwmTud~y4fiby7a2bKih86UXE8jhqrcQMWeFNTqAuyeb3FnNR58OClCR7eix0VbOIQ7jTVnh08rn7JBqe2S7PXS3mr5AWEKiIul-QKDzCMzgeCUed1DnrIa2hNP-Lrp8f-C8vaO0zx-5lvfeI3jr4MCW-kGfzmlHqkdKCKExn2k9y1-SNFK1lLyPkVApT-OIuwKlvxgXErDPp~a6PB6T1zSLhq8PXMqVOsvT4dWodGXOZXxg__",
        },
        date: "29 giugno 20222",
      },
      {
        id: 2,
        title:
          "Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura",
        tag: {
          label: "Allarmi",
          color: "#E2F1E8",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/4836/a9d1/6b12b5889d6ddad962a628409ed1fb35?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g~XLybv8bDGxsn972Q7YXJl3KjyKqNlJdanAKDuGmjiTaYpq5qYND4V7wxFA~vzQci4tLn~fZ4BcBap1yEHJd7ygZ71BqJPxUbEz6Btg0RNfqg7L0e19oxLmruWjL3Unvj-PpZYn9j4Q~ra67Sxfd8679~qsbMO-2u1tCqxFfbRL2nYwhBZw~hbRwuJ6tquzOY8x6tDQxjiNvcxXzzUHSfmFy6NbIssWj-PHDeRa2hngWM5TZIg5Of6owSU0nDPU6fzrwZkngEjMczfmX8Kft-tTesZPw3YT4Zsm6wj1dg~g84JkdVT6Or-Z0S-GEqZ7JA2sFXvQhxBdYpVL2gTdXA__",
        author: {
          name: "Ugo Lombi",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/cdb9/c156/d7312632d8e9cc247b26cdd7abe33d50?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dV3J9Ozq-IwQJVbvuwfWAGLqn8o3~fiwJW6t58gAa3QN5PXKBi3Nxfj0CJsNErw7h9Y9u7sCtABzS2WGP2~~pPYDn3Wb5kGxunZo7NdRFZd3GCltdNdpRv3QUf4JhJUXqmd6xIs0Wll2u-AI-zLK01n0oQDQ1Rv4vcAUI6k4roSkpg5b8CGpAJI1qjdYbGN6-Y8j1mf1vdvUDB2v4jr3UYwVHt5VtH1uFtqm6exe3MX7btICUd0s2sq7wbp53JIrPViLfMntnjpUgtap8eP9t-8YsFdy94Teio9QRanR4Y4sYNd03kdYAjPN5l44J-P7EsqVA~8APt54bdzFSr7SWg__",
        },
        date: "14 luglio 2022",
      },
      {
        id: 3,
        title:
          "Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni",
        tag: {
          label: "Esperimenti",
          color: "#FFFFFF",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/bae5/6314/414203738595db29ebe106300bc6ffb0?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dcQM5kKFiUqlOhYj-GWcUdiQs28z59pjQbGUiE~jHiOGaLNGDsJHX-snARwLwM7XgawiLDQj4qVrumYWLZo2U-nedgv1xtiX0XcNtrjsZEaHwG425isfG4pktoZVAVWBzAktuRcvf1lDagpQ3aZ7-c4MncsB27s-eu6ZI59kIruKy0Rgz~FDTOCEp3cPNFszUvZu0WlWfW0L9JuMiNzNMVHH0Kr1skj2Lcl9flN9l4gTJ9kkX2jnsRwFvSLuWd249tDS~dSCIp~AN00IqY3p9Kr5szwwXMmTaroOeXT3raYKPDBzPg2XS~QC6G0cWR~0m3HSdLNy12k65BuByJ0J7Q__",
        author: {
          name: "Diletta Grella",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/9c57/a7d8/e162b18ae8d0a12c5f4e32f54d60c0b8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C7FO-smY72Wo5tE~kiYWWHyrZuvM0GNv3DPewM5JbSC5R4Iml9jGngcPvEUvRBrLOpPCp29xXPWMmFGobzKQp-w3f05e9Um2eoiHqARTS2ld~SNx9x~qZQqvc6x8lQgZBFS0-7Jg77MpStzsCcSfzXU9rFNPzH0xX-cmk69q3KPlkTWx7sJP-qgi5jz6FF1fS5ZC8zjCWly-xyC8qvY~yo2kSKaOw3bh0helfgVbN4wYi3jSjyOQ3YBxfdYsjCBhZPeZbpYRBigSVRq7uthpFO5tp867kxLFhhHZxHM71EJz~LjIbhcVB-caisXTck9HMGoZ67-j61IRgPCJHWbMUg__",
        },
        date: "14 luglio 2022",
      },
      {
        id: 4,
        title: "Innovazioni tecnologiche nel 2023",
        tag: {
          label: "Tecnologia",
          color: "#FF5733",
        },
        imgUrl:
          "https://image.email.bbc.com/lib/fe3111727564047f7c1078/m/1/TECH_DECODED_2024_VERT.jpg",
        author: {
          name: "Maria Rossi",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/8414/7ee5/e42f4c1b3ecdebcbed1f14bb9f1c01e0?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ccGPu0100uJcYhPy-L5-ffsB54i~QDgIktYI5hrUwNSGZBRTgwVvOyOn3uZRg~aLk-MlWqG2sPudLwkno8b8hMMduacCJSpXIdF-2KR0OpU6ugeSBkHhQq7SBOVkDRPCwz1qUyLyVynE7ntF~D3L6SCEh67x3bFIeEOVSeSd7FFAnTHnVHUApvs3YRt06WfRLV4tnPIztTBp4JZln9DdByHoQ47BqNU-Wjt5QYyHkgnu3YlAYTy4CZBwZvAwALesDwDFNWTw9i5ETdV6p1PAuoWXo7MoZugHbuRnC32PdLMaQY5yEnhOpJLE~XicXNRdOTyvaQbqBodL9pGKUZ68lQ__",
        },
        date: "12 gennaio 2023",
      },
      {
        id: 5,
        title: "Il cambiamento climatico e le sue conseguenze",
        tag: {
          label: "Ambiente",
          color: "#33FF57",
        },
        imgUrl: "/",
        author: {
          name: "Redazione",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/f907/3372/70669a9c146f3e96e80295db292b29f4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VjaakvnSdWO-AKLhLVmNOz4AfGLu5e5PXV7iJ5YJ~mkssO0jQcr6GSEx7jsOq9ZABulNAWXXdcTlrZhkVKpcIGg2mpUMEyOh4G0mXMqVH8T95buUyzErIL8N8sPOhGVj-4HL2LKaIxvVnIpESJWiDU5EDGlluh7t5UMifMQ5CZmf3ODrO3ra-BISyRpAUKDtA~foa3nLzciPWOMTVT4gWi3y95eJJW0YJJR~zZ1S4ti6Kv0-dQC6hQTIUL0gluEU5A4J3MPDIa71GI2kNypYL8-4AwMYxDujykm1K1dxkFzC2lTFsSgww5~32l9proOJXxEsL5MZnVGcGZHBrf-Tqw__",
        },
        date: "5 marzo 2023",
      },
      {
        id: 6,
        title:
          "Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne",
        tag: {
          label: "Adolescenti",
          color: "#3357FF",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/1034/7202/694ab24ec3d3be255190e79672905561?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ahi4D7fLePv5YaBYfowsmQkAYX0gdRmd7JAe8GKmzsQvHOJqJSEveU9uwWfJ3Et2-Ktl-xlGecUyu20~KXGd5p-Hrtz322lCGXDudyyk1msKGF56NKodnHOKn46gB6qiMsKwH6UdN5Ua4lk-2R~4X-WxHFfofsrfcc42oWt4gxe065xbHNaDYMzCmXxT12CSm1HaIvC0oA0vbffPmkNSms7JtQJTp6UFmJGn0dvDKkTxb6K9Vp5Xef5npi0UQyi4eSbUIFyETGAhJ1Nvu4FcWr1b8CUvAwopw6meiScrwBDHN3nVshiHwUBZwtR4vM9r6HtQzm7lIVdXfxBCjrN33g__",
        author: {
          name: "Laura Verdi",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/c125/c32b/e27320b1f5ccfec9e81deb42d4223500?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lfwFWHJMGspYdJRiiMcmhtlN7lkMKQaxM~e-mOcdspvmTtitg6PMvxDMDHEArq9qbojyItoAYmBFWucc3uXxTfM2Hdl2W6pY5K96BaBM2PDJOKWgLzNkHIZbPGPHn332rAe5LvNEOgnZYTyHDKBR9kf~c60tEakeybRQAp1YseLC9W5LPO7SRkeE4nj6elTX15TrkTUoPUmaA1BGifBxXpk6n~3k6VM4oIrVJgnFKO-LR3znwi9Yu~-Bf2c6qRN~akvVy68AQpZPosiMXYKkn8E-L~dahA6xgy3c9prny6v1sXd1tIfb9LmZ4KqYK7MHxwWh0HpXKj9kwoOmUDzQAg__",
        },
        date: "20 aprile 2023",
      },
      {
        id: 7,
        title: "Economia globale: sfide e opportunità",
        tag: {
          label: "Economia",
          color: "#FF33A1",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/9e80/4ede/387e44379e5e0554b39b5ff23f335d3f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c5tKqgPf2VQlSKhr7vjbIqHiBqfyhN-cOyN~vYmBiR9WZCzN~sS4lvXfHdZtSt5GoYcXRC2fBJ5O~wfI2C9tzJ163QNBwJZFjC7Hb4id13kA0MqXa3qr4chG2C2QKq-9iCqSxLXtZ5T0I-MRhJ0B2k2vy-Frf7GiFwNEh7cPn7MIwqPG3WhHIwPvaaI0e0c7tRsDg6erLzEuFdUCtVzSRMtLAdAMXp6LNLagK-Om7hE6iEm5-3rR3PxeEwuqhk-E0zMO2ukpPUUX64hkRHpyToP~VW2myzC1AT3VBvxB0Dy6FUPmx92Vc4rd8ZWUtbXN1J7oNcYVTS4wgG~YOPJsAw_",
        author: {
          name: "Luca Neri",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/c951/38d5/b1333cb56a996d5407641c9ababbd42f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E~5Uw0m7I5cXwAx1Q81fm-QNLW1B9PNtRNq~QsT6FkFybQ-Vn8pvITGnrEPxzKG0pYD9qhRCtT7WOGWBCmUNjOrVpkc4C-MqJQk33nSJpwbaGc8~h9OFGJpz~OiVlWTyBvD8mepeuE1XSGhNyuLSYaPZ5Qf9oMt6zKRDQFSdRCwyJgkIVOuQEa2Tn6XlH~UiOcH7wO6DB2zoyQo0C-JeDK-f2hDEpk9T-gWPSnGVDssWvQw1R609EAQ4-NcLCNnXdyEGZENh0bPWaodoGe1-G4GZ4Imi9pyIh8Ngurk8I-P8D04WYkhADwew01I5FmCZU6dxk1zZ5qvtzsS1Cbjv7w__",
        },
        date: "15 maggio 2023",
      },
      {
        id: 8,
        title: "I segreti della cucina italiana",
        tag: {
          label: "Cultura",
          color: "#FFA833",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/145a/abb5/dd3e9b01ec8fa348b61f1f5677f898ed?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DeLPneHiYV~F~8oVP39Qmu5lB1UqJSqZGZKPUsRnw8jyd8ixAXrEIjxFnlj1P9qJBzDcy8Bj4o2vb76-zqLsvv9SMZLmTFxdSKb9gEzWE5dTkS~yGKT6U6Rrim39~2jcEKuBJcgZxcqetncKLVhT28Ips7DFrOgwW-6BAqWS9Hnv91VMo5g9~-1821v6r7TO1MDyergDUP7FYo3QrO7luIystL8kh35ZZUhHB7s4WPMxLhVJRK~AbT5J7jj8aQvgv6tsCGSJGZSsLowCvEvsLo64SpRceWHb1Ljr6gmgPWRANt4gERPDp2SDUqmrwWq5sOMkDHz40GaJUgF3KGEMmw__",
        author: {
          name: "Sofia Gialli",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/9c57/a7d8/e162b18ae8d0a12c5f4e32f54d60c0b8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xom7G828jp7ApTg4PKpeh2lXi4puI1jB-mOZZE4sVSA75ApyjE9B~a7adcw12QLS9CJjrkvm9IapaEqSWpDwWzzSWTHfftBsoY4K~Mge7RmoEwDqtJUs4DaWrBoty07hvMtd0MIYD2DvDXMUa~mAIrLvoWl~duXYQde415FquLMT74gzKcoZ3J9m2r7EGJfDc4McNycrf7ADPqqk9IDP4r34nk-7i7c7ofZQG4eUa-VtNEjzYlooOkrE2v4gXGFgNslirdl2bDhn-WXOsvxwXgAo4-PqUoy-Et~vHYXw6ix-vj-jYR~CMpFykiFOANmtomdNuUsbWyE4tUBe~cHhOA__",
        },
        date: "10 giugno 2023",
      },
      {
        id: 9,
        title: "Esplorazioni spaziali: il futuro dell'umanità",
        tag: {
          label: "Spazio",
          color: "#33FFA8",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/7aca/5686/f21f938a0b40db341f1e0c17dc4c52cb?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X2XtIrebG72xSIr3Th5xmp9YFJqdbWvtW17zxJ1UmBa00W7zzyu8ce-EgAEkCJ9aZnJyG8h1RJn6ug0GjSlcrpaD8eZ8mNGYHQeiT8km2cvEa4S3lun~Iu676upr8ZGZga6XtdBoV7N9-JMLXhiBL-Y0Y6EEg3XYX83K77Pye2c1J3zb8d6uODVTFgjChsgL59IQEtbby~cVaKwpGlNp54CUazCdFsjZxLjuV1f0IuXpP0zQPs0LWoAj5yNSsjYzECUR8vySHlGapZApztYTdc4j~fdz9rJ6pJrvLvg6afRHcBg-3nRDfQkXf1ZWQtuAmvJaGewhvpHy4nwNBXC6DQ__",
        author: {
          name: "Marco Blu",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/8414/7ee5/e42f4c1b3ecdebcbed1f14bb9f1c01e0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fR5fYD7CBWWr8rQUDtHs3DEBVWoLTax9Sd8z56pn2nWwZDqRoPRwE44QjrpNlLbkfw72mDb5mABp2Z6uUgWMv2~Ne4lOGcasOrfKqRq3jdRbMAq1wzciu7ickIcg3dinl88bHNtCuXhyTadI0I581zZUg5D6qWbX1gw6wmkLlWcV00IwtGUfygSene6jEaFNGaiNCgIIBq3ToODPte7kYeVR9xXbIbPS8BkAh5big3UpjmWESSOzJ2LmuYGWDuAOVrkAU6qXGhABPsI8lDhCSR~kpB-3oIzvSiecKYr4x9iZlszFydzHU4Y7DCFrd46g~67VhoK7HZfkhThwxAYmGQ__",
        },
        date: "25 luglio 2023",
      },
      {
        id: 10,
        title: "L'importanza dell'educazione nel mondo moderno",
        tag: {
          label: "Educazione",
          color: "#A833FF",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/0d38/ddf6/b6e33ccd8199114020efce75167974ff?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QAqF2Rc8Ayfo7Q7MicUfxlMSvIltGRp-TjP6Cx8oxhfsE8auNXqTYBnswzY4n04TKmzWrr-lRUKSJHG~XZ6KTIp0FJS1b-MHmwPQOAj-rxBAgfMxuSPddZSbEOxRqb~RFVXGQo8dOmhWM10tHn1vjKbjCRWcgcEdPLTMFVbh0oiO2VjjJOC7ICovxt1-Ys2Ad7LwElZ2IY7tTTYGor1OcsyrZgU69hmxGihqMi0IfSzlOPoNXUzg59RELyE5QZrQQEUVC8xie-Ahm4FqplTHDYiPQLvFu1aamFub0WL2psQooahZ1SWM8FtjB12J0ICwDaW2vbpQMy0J5qolQSOcWA__",
        author: {
          name: "Elena Viola",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/b648/2bc5/67cb99124fd4444239d5f19f386fc793?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aEQ5EnVsF8i3DJwbtc3qI5l~ohZtSzAh-qxfcIwmvts8HSvpSub6AmuoMhNy9pbaaD0smz7ygWKSILxVe~dHficsThsoiyB9EYhrNEM42ZbLvTB2QjwJ-avCUQuHFmWWwzzg3tdpIpkJCEHwr1hyvfpWFURCj6HvYzayWN3EDDCBaAgHL1mBzOacM-sCPln3hyfZnQYF1wEHPp45HRbe1CAy3b2si9WOryLHJd4kXFoILiSUczlnCUioLj9YJkqeqjKM6NAlvcetlOmSiMIGBFQokWWpyWBCeArDmt1Jt-R0J4yKj~Hw0j1sB-wQ~4kcthXC8ypyNL5nh1pYzm0f~w__",
        },
        date: "30 agosto 2023",
      },
      {
        id: 11,
        title: "Arte contemporanea: tendenze e artisti",
        tag: {
          label: "Arte",
          color: "#FF5733",
        },
        imgUrl: "",
        author: {
          name: "Giorgio Arancio",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/eb80/59eb/771f2cb80a65f42b1c45edda57ad7df1?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T2pw~he83jneqlLcJ4mhG8m4Ro2LzQRb0RKewsD8B-W5JJ~QvX~8Zxi1t9WWGor6tvBfO8Ex~YoFdaX~slN6obRnM9kxABlvpdlcI2MCAhoD5h~L4u3fJvmRF4mI0VJwoqft9h4JAXJHAYZdXaPCp7iNvfn3U3HZEhpMFLiJo7Gq~DpSPcfl3w7VeAKi-BnNvx~n-IaP6SJpSNq~uPUIpiG5TW21AtdgrDuPHHFeUxt0-1e1sJiScTa~mkv7bTWI9tACPi58Lv4wSArtYaOlwmYNt-zFIYHtGJFV1vN2FfjfKB80auzVu6OSMUHN13pN7GIj4IkmnurQEvGl~v-0rQ__",
        },
        date: "12 settembre 2023",
      },
      {
        id: 12,
        title: "Il ruolo della politica nell'era digitale",
        tag: {
          label: "Politica",
          color: "#33A1FF",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/744b/c57d/4b06ac6a9746215a07da8b9922bb27af?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FVMGONJT6-1PR~IjIEn6NjXc~UMp3wFtV12ErlDKjRbFE93fJZII~6xf7wPIvMLbXWIMwKKRD-n0tBA4T9Wel9K7xgaVBsgj3rhBBf4E6Z2dIT6lqzqo8aDQtIL~k3Iwzf8xxAswVKRZREs5SWCmXmp1~Ard4PB4XltyfVjwuFNt7BYQHfrc6Y1fW4m7UDqWDcyDAtYGH0k9Xt9X-Rgct~DzcKScVDlkRBTPFiB2bie~0rInevIp-bAuvDCAPuAF94Fspu9YFwUtCZ5DSvAeWCSDR7B0nCAKV-XeYF4OpBtTdLufgCYAOgBu70MaBesWZlepmELZWAgH4UjTas7Dhw__",
        author: {
          name: "Francesca Rosa",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/2826/4a7a/2b8ecbe8b0ad38b39dc4342fc8b60aea?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LgF7vfDPrFaTBwgLUH323V9b4hKwGwryyhhtpJ7FAtgUyD1nGt7lTGIouVbOjXXxanfnnkoKeMaUeo4GRODs5tlzKiPulprnKxQZhj5vziqtYaSidC9-Iq7l7w2M3wAG0vKNA~krda-lnpdc~3Xe-vS~1IOYzwqyDsWZh9lp0v63F4aPYYx3DEeOqizz4ra-fyd9lGLnOy9na6DPXv3iqJi0GM3zoLBMT~ULiI9tku5v6NmJKJNlQFElosPjbAwoaVLkgryvt9fInQY-pmxUsO~A7t65OBmcO3L8awKSsCOusXBIPrhMlL7QWqY3BAZWQN6hVITyCCzKxSBaUqJxYQ__",
        },
        date: "18 ottobre 2023",
      },
      {
        id: 13,
        title: "Nuovi sviluppi nella tecnologia blockchain",
        tag: {
          label: "Tecnologia",
          color: "#00FF00",
        },
        imgUrl: "/",
        author: {
          name: "Redazione",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/f907/3372/70669a9c146f3e96e80295db292b29f4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VjaakvnSdWO-AKLhLVmNOz4AfGLu5e5PXV7iJ5YJ~mkssO0jQcr6GSEx7jsOq9ZABulNAWXXdcTlrZhkVKpcIGg2mpUMEyOh4G0mXMqVH8T95buUyzErIL8N8sPOhGVj-4HL2LKaIxvVnIpESJWiDU5EDGlluh7t5UMifMQ5CZmf3ODrO3ra-BISyRpAUKDtA~foa3nLzciPWOMTVT4gWi3y95eJJW0YJJR~zZ1S4ti6Kv0-dQC6hQTIUL0gluEU5A4J3MPDIa71GI2kNypYL8-4AwMYxDujykm1K1dxkFzC2lTFsSgww5~32l9proOJXxEsL5MZnVGcGZHBrf-Tqw__",
        },
        date: "22 novembre 2023",
      },
      {
        id: 14,
        title: "La sostenibilità nel design urbano",
        tag: {
          label: "Ambiente",
          color: "#008000",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/e970/cd14/3d1f7235c3e5d419e8302f421ad8b295?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=apwhql7x7FKKKm78HsjEwwT7HQiCdIVgYgHl4kOrAlMUYolBaJ2nTc4rovBACTHUp5drR2I-sNI40tZmgg3zUf7fYMwblUjEIN5rDaKgS~7TOF4lpz1h~osu6icI7A1uvGYJRJ-JyufnIcZ-C0v69eP2XBG95FmVAlZcG0fkgeObx6WsTbwciFq9vsixfc~Osp7VMnDUFEq6MHrLKmN~dQA604R-c7gE8v1J-qqUbFA3nv44G2zQZRvQaw1RKwWGsZJfk8r7WAJdEAuSvvaleoxfa~ykff-vg6JyEW-K935WjDQcjX49KxdQspVHPR83hb71Pmr5OYWsAQFpE7U00g__",
        author: {
          name: "Giulia Bianca",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/8cc1/b260/edeede7141dfcf5972162a7227619869?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PPKX0uldfK3-H4nqB8EUKled9XC2JQVyfLcSVClpBgzaYqqrs8C~hAyGEv~uc8eqndqGhQboPsmYBI3xUhtBlAF2A9zAJ8aaJuS3QhdRwY-fKd74olMHvYrRJW6sfsFXthXYlHPrtgF~FFtiYJot7D23zIC7bDL4yiXohwlcRkTl6Kz-w4WSUuTVbcZftRIk~y1KJrwFM1uFzRk4S0Swt0f7FAtGBoG-tLKCswwIbcV8spw2Rv8zDzr2lakzMytI4NqoeMwvj4rDA0SsfLAmKuS8kqH-seXy1GYQycZyL35ZgHls97yWx2Ek0EnXHhweY5lfVf1zqRgwpo-L2jhv2Q__",
        },
        date: "5 dicembre 2023",
      },
      {
        id: 15,
        title: "Nuove scoperte nell'archeologia moderna",
        tag: {
          label: "Storia",
          color: "#FFD700",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/da85/d039/062fdfa20bef29e54564611b02e8a5ab?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VexC7fpGQkVg4AnD9WsolPS5rNJ79T5obQbwxxlYjweRDiooS799yl~-Gwr-tkiSM4xIdh6uhjqUNmI3xAjbFr8CqKsb-ivB1U2bA5NH-kP2ULU0DCnkXiNVeqaMvGBj8jMRLquianDHdof29XB6cRHBkMZ8bKAE-XYMtX3w9Xfe2AI~bxFPtQoGhf-YJqDM3zZ2MfWJ9RXXN0lv60hbMQ98YQEG0h5v0OR1jgB60ay8EhyaM8Z7GQQa29go8ssDwME7vE9~xqyx9eDm7SjMPpGNzXdu~DC2tcJgnPuslRVOsoSvibFTBW0iz~vDs8dhGopr3EXB~Pdmg3Xx9t~zmw__",
        author: {
          name: "Lorenzo Verde",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/2d6a/051b/601fb70339283e7d365eabf38ce9a737?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g~sbHtJo3e1XGcwLauhPc3-GcwW2orneWNsDPAHx-c5JE7QlW-D6QBEcvzqDHXKMx2PbkyUODZKz0-Hs41fU~PCuvIJBCM-aU4SFpPpwn1v1QMpYT99i~YPV9P8BkXzFKpBiqQe5A6fB-8tLaWfCztejh04~g7bqmpz-jMobSgiLuK7m9KkPGLfQCPNlt88Jd~v6cPeIIb4T7BG-vYcENhTJ3ayuD~C0IpaEpD4RbBVFWXe5igFZjbAepIusEMSBHGfH5Rzb2bXdDlBqDK4g7lu96vfhHeNtq-kKyP7TnW-r1~xtJiTlUUTfw24oq0i0vqJ5tvwuYIEX3b~4uslAXg__",
        },
        date: "18 gennaio 2024",
      },
      {
        id: 16,
        title: "L'evoluzione del mercato delle criptovalute",
        tag: {
          label: "Finanza",
          color: "#0000FF",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/4b2b/465b/8082eb66b7d548ad6812c00f8a8a3d69?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U8edgdqNQtUA8obCZSvVUIulOQeFIMaz6B3NZcJPLFK4~6TsTtZq0Ril2o4rbvdorKmg5CS1q8VOaQQEj7Qda4ArcTLd3hJNeeiOSIawIilLFlcUnkEFiEPJB3QVxMxx4Sc~tnXv3hVNeuT0Q0-VE1gfR8qOUt4z0Nkwq7F7EPSay0oKYEMjiQrA84r8UiDL1QVUH-bxfRBHeBpYvUiYFL7JFzxCFXRyGehB7diccgegBVBYHEBXDTN5kR3nmsiu5Eek96lTLenM5lgHWxM7SfmbAD01lrKaQ1oLiSwUes88ApcbKcOcEBvbB~GzPbKdXUjK6vpsOyMtPTCCOFdOiA__",
        author: {
          name: "Martina Azzurra",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/9c57/a7d8/e162b18ae8d0a12c5f4e32f54d60c0b8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Xom7G828jp7ApTg4PKpeh2lXi4puI1jB-mOZZE4sVSA75ApyjE9B~a7adcw12QLS9CJjrkvm9IapaEqSWpDwWzzSWTHfftBsoY4K~Mge7RmoEwDqtJUs4DaWrBoty07hvMtd0MIYD2DvDXMUa~mAIrLvoWl~duXYQde415FquLMT74gzKcoZ3J9m2r7EGJfDc4McNycrf7ADPqqk9IDP4r34nk-7i7c7ofZQG4eUa-VtNEjzYlooOkrE2v4gXGFgNslirdl2bDhn-WXOsvxwXgAo4-PqUoy-Et~vHYXw6ix-vj-jYR~CMpFykiFOANmtomdNuUsbWyE4tUBe~cHhOA__",
        },
        date: "2 febbraio 2024",
      },
      {
        id: 17,
        title: "Il futuro delle energie rinnovabili",
        tag: {
          label: "Energia",
          color: "#FFA500",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/f56d/76d0/b3cdc12c579a217665d9ac44216ffc79?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VLBetd88uWHrwkQM3Bml51vVAcvpdyLwxFqEhMlpNe0gC2lmJVxvx5yCgKt0YTFGgROQlT-7L45UUDTT2WP77X6qBlITidjoZ0akXt8jSgy400mGzpqvvRCA1FxaKvejaC2QMWN21XNzxIuH6Be59C2N0XaNYl86uM3Hvv-ktBFbEBW0VaP350~BC8xatmRL21uZnum0oK8rRrLUqf7kkgq9PJl5MDSOZL1xHY~QsFBsS-uWxe3TkW2bd6OV7g6ffx-k-4uR8BCt9v6JRVbuqgd9qRQoNGowDCrLBdIActTFIOLyJEJAI0OC6-AxeqTWurP0l1p8LX6BXAApKrf79Q__",
        author: {
          name: "Simone Rosso",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/c16b/af1e/84a075104fc560b207576ca72bf0c0f2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XsrMksTEpHGZftCaeC6RiNgZIzT9rrdexGoVV1TA2NYto45GYbluDa395WFWsgJ~BkqC7o8XY5XHcXWNi0l1XU3DOGOHSz2QuMIt7GTK4UR9FAvs~-e1dY-g-QkYkqstIXuVZcnYflsRyvk1lXd4namMNaD4hQPLDGMfUEvbTvWDwN6zDShNKVgKEQQsI-JUOHtQfassrLtBSDZa-BcnaTvlwj-nLppGE9jAFd9PG2Rs6kfG49DGbbfrMqaw1Yc5AC86FRlu-VxS-9Tu2QsVrogHbg4b3KJcarUo-1qdIQ-5ciK0hz8JmwSAAAEYG55wFBEcZdsL0pcHtWLBhtwI~Q__",
        },
        date: "15 marzo 2024",
      },
      {
        id: 18,
        title: "La rivoluzione dell'intelligenza artificiale",
        tag: {
          label: "AI",
          color: "#800080",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/ae91/8ee0/fc3e863b2eb77ffc9385becbf47b5d54?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FtLJDKPT5US9jNSZJAX9HRobnMPWDftzgYnWfGLUBmglVHmQyuJwiK9q-5t-xLs-LF0FH6aqmRHCDvRH-HUr9RsAl-vEQdZXINp0PUUfiWMnu2ITjpsmOIB6LbPQq3mNaIVKnQoOrGlwIvpDHb-byFJUoboI~0DrbdyE10y54Vd0hNCq6c~gZ1ZpRDH6q7PPWE9NJP~ISuHGs01yZlsixKgljsoFkEEz-ou4PSmM2WCvSrL~pU5BIoOG41w3GZzXGSi2uB8uNq6LIsmPYWu42V0RLJYAhFRYie66XfiR~gH-sAWCKl3O44y9ZbZQL1iXBRlDUb~Lqg7yFWBEvb82yQ__",
        author: {
          name: "Chiara Viola",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/bf11/c373/90fed30b342ff093342b985c6fe9ac03?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fIAfjx~GmR2wLZ8Gs17R-31a3flu2-DQIRSFsrOcCTUskM-4uhkF0-6XnMtdXWw0hUDzt9UMLKb-BloEu2PDf2hYQ3gCUqfQtT5IODt4YxXhfw46ZVFEdq21lEC60C71PwY7Q2OonEE5QMw1zRbLuPM5127AynjIWtzCh0LK3fWGCdiNYvaEB5Go~0MFNSoJh6t583V8S7Jc2s4jp5~BMP3w7O1s3Jgn4x2pcYRgzP4B5zhNQmMVrM22LS9cvgg1lQj70CSwDFg~L68s0jvEYtoRTBP~PNZC72o7QV8MHR2tkSLvKwVFIczLveEtyPrylOW8Ob84UGgVEOHa0531iw__",
        },
        date: "28 aprile 2024",
      },
      {
        id: 19,
        title: "Cambiamenti nel panorama politico globale",
        tag: {
          label: "Politica",
          color: "#FF4500",
        },
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/5b56/6ba7/c0da822e4e1ce4483ec38490a81158c2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dINMyqzjbLR0Lmq28KlCO7qem8QQiBCDWcvi4olQw15cHd58CfJ4y2c7A3rsKAHOg4hVQolwjuwmIXn4AnZLANdQmNJGgXPVdgNY6QTcwktiGTzcupfZfnGRAJ7TjyvdlgFRZk9MnLW9ap5S8uK9NA5cV79Q0Vnp0eHjev2rQ0nxFunxR8FYtpWLxuNHOwkRswZxNrkYHGEcKoN7Af1mtVeho4rYYrDCPAU91AMUBY~6NJdikf0AbUDjTb2PDGHHCIxiqfCDJXN65gh-40HiUwQkzJTxrtF9JcGHyFRc-cGjaS-R3yXcdrfnR2iEDJzMJkSwFAZsSoY-6WZkVSHJUA__",
        author: {
          name: "Alberto Nero",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/4d1d/88a1/5780a18e97d72a007fcfb2bb89581bf3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NOuTPCQuxUuJppdS2IEpyS0MhS~-cAyVwjyNxJ7o8604UZy2WUyy~3SMB~6dnXasWeak7sVWDEk3o1AaVkkoWO4u0u22pLDUBdYz6VxBicDhhNr2jUJg1vL~RC0UUClJGNJrr3RV6LYehZNHc0H48qYKcJnXnWZT2H2Iwb8mWOrN0inFX2fxBh8x8Ksnp51N5cftdwNIGhimjnH6uEjWTFt0WJWdtu1vRUSP2EIqwKDaKAuyw82QDdygXGYVyNGDJMqK6WYEfPVKfEfkw92oeGLNtUEiQeKrN9-SNMJ0b1fqE9MWz~aaj~rlDmsvqpJevFKTysZzJcIICiN2Lz2hfQ__",
        },
        date: "12 maggio 2024",
      },
    ],
  };
});
