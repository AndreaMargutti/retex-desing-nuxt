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
        imgUrl: "",
        author: {
          name: "Redazione",
          profile_pic:
            "https://s3-alpha-sig.figma.com/img/f907/3372/70669a9c146f3e96e80295db292b29f4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VjaakvnSdWO-AKLhLVmNOz4AfGLu5e5PXV7iJ5YJ~mkssO0jQcr6GSEx7jsOq9ZABulNAWXXdcTlrZhkVKpcIGg2mpUMEyOh4G0mXMqVH8T95buUyzErIL8N8sPOhGVj-4HL2LKaIxvVnIpESJWiDU5EDGlluh7t5UMifMQ5CZmf3ODrO3ra-BISyRpAUKDtA~foa3nLzciPWOMTVT4gWi3y95eJJW0YJJR~zZ1S4ti6Kv0-dQC6hQTIUL0gluEU5A4J3MPDIa71GI2kNypYL8-4AwMYxDujykm1K1dxkFzC2lTFsSgww5~32l9proOJXxEsL5MZnVGcGZHBrf-Tqw__",
        },
        date: "5 marzo 2023",
      },
      {
        id: 6,
        title: "La nuova era della medicina personalizzata",
        tag: {
          label: "Salute",
          color: "#3357FF",
        },
        imgUlr:
          "https://s3-alpha-sig.figma.com/img/9e80/4ede/387e44379e5e0554b39b5ff23f335d3f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c5tKqgPf2VQlSKhr7vjbIqHiBqfyhN-cOyN~vYmBiR9WZCzN~sS4lvXfHdZtSt5GoYcXRC2fBJ5O~wfI2C9tzJ163QNBwJZFjC7Hb4id13kA0MqXa3qr4chG2C2QKq-9iCqSxLXtZ5T0I-MRhJ0B2k2vy-Frf7GiFwNEh7cPn7MIwqPG3WhHIwPvaaI0e0c7tRsDg6erLzEuFdUCtVzSRMtLAdAMXp6LNLagK-Om7hE6iEm5-3rR3PxeEwuqhk-E0zMO2ukpPUUX64hkRHpyToP~VW2myzC1AT3VBvxB0Dy6FUPmx92Vc4rd8ZWUtbXN1J7oNcYVTS4wgG~YOPJsAw_",
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
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+8",
        author: {
          name: "Elena Viola",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+8",
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
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+9",
        author: {
          name: "Giorgio Arancio",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+9",
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
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+10",
        author: {
          name: "Francesca Rosa",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+10",
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
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+13",
        author: {
          name: "Fabio Giallo",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+13",
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
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+14",
        author: {
          name: "Giulia Bianca",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+14",
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
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+15",
        author: {
          name: "Lorenzo Verde",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+15",
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
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+16",
        author: {
          name: "Martina Azzurra",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+16",
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
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+17",
        author: {
          name: "Simone Rosso",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+17",
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
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+18",
        author: {
          name: "Chiara Viola",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+18",
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
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+19",
        author: {
          name: "Alberto Nero",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+19",
        },
        date: "12 maggio 2024",
      },
      {
        id: 20,
        title: "L'impatto del turismo sostenibile",
        tag: {
          label: "Turismo",
          color: "#2E8B57",
        },
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+20",
        author: {
          name: "Federica Rosa",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+20",
        },
        date: "25 giugno 2024",
      },
      {
        id: 21,
        title: "Le nuove frontiere della biotecnologia",
        tag: {
          label: "Biotech",
          color: "#4682B4",
        },
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+21",
        author: {
          name: "Davide Marrone",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+21",
        },
        date: "8 luglio 2024",
      },
      {
        id: 22,
        title: "L'arte del XXI secolo: innovazione e tradizione",
        tag: {
          label: "Arte",
          color: "#FF6347",
        },
        imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+22",
        author: {
          name: "Sara Celeste",
          profile_pic: "https://via.placeholder.com/150.png?text=Author+22",
        },
        date: "21 agosto 2024",
      },
    ],
  };
});
