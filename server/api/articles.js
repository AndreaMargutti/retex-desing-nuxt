export default defineEventHandler(async (event) => {
    return {
        articles: [
            {
                id: 1,
                title: `Roccella Jonica, la Lampedusa che l'Italia ignora`,
                tag: {
                    label: 'Migranti',
                    color: '#FFFFFF'
                },
                imgUrl: 'https://s3-alpha-sig.figma.com/img/4ed2/a214/44146596a39e532d863a717f24411c63?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VqVJbcxappd7DUEMaBXbsCAN5BSfemHoJ3KJY6ycekyTqXrhR3qzAfcU~MIiaiWKq1u-9a5K2ActWR2uigwsDYFOikztDhwQ6G6dk9GaNoZrXNmkiR2pFgdJ4JMAVXnUNsA2f8puP7rRvz7wlp89HGZRBj4oYSrHBRpRjFvCayAdRcaHzT0IGUuABANtJW4~O4QVJADH4N58qs4Gj9juPzZ3XU~jBvifNrp92o61vYgo13zyDwT7fi99pAR9zjwSFtUmjNmVrBeEzdh1d7m4PrNVlTzH1lOO7camLys84ZCunSv3-BSdCPJS0ujnUWpyZcQjcZ1NVkJ5g5CfwrkZbQ__',
                author: {
                    name: 'Alessandro Puglia',
                    profile_pic: 'https://s3-alpha-sig.figma.com/img/d518/a92d/e059a7a3367ff920d07e1938b4e8cd8f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ChsjmqjqnABwMOafW748YLYGkh9lQnqZ8WCCFOEr7b4nDpnoa-6kNR2waXbmth2Ii1xNVCFtYdoiP74RlHJWdgYJPg3NM10z2Y4C0bwwmTud~y4fiby7a2bKih86UXE8jhqrcQMWeFNTqAuyeb3FnNR58OClCR7eix0VbOIQ7jTVnh08rn7JBqe2S7PXS3mr5AWEKiIul-QKDzCMzgeCUed1DnrIa2hNP-Lrp8f-C8vaO0zx-5lvfeI3jr4MCW-kGfzmlHqkdKCKExn2k9y1-SNFK1lLyPkVApT-OIuwKlvxgXErDPp~a6PB6T1zSLhq8PXMqVOsvT4dWodGXOZXxg__'
                },
                date: '29 giugno 20222'
            },
            {
                id: 2,
                title: 'Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura',
                tag: {
                    label: 'Allarmi',
                    color: '#E2F1E8'
                },
                imgUrl: 'https://s3-alpha-sig.figma.com/img/4836/a9d1/6b12b5889d6ddad962a628409ed1fb35?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g~XLybv8bDGxsn972Q7YXJl3KjyKqNlJdanAKDuGmjiTaYpq5qYND4V7wxFA~vzQci4tLn~fZ4BcBap1yEHJd7ygZ71BqJPxUbEz6Btg0RNfqg7L0e19oxLmruWjL3Unvj-PpZYn9j4Q~ra67Sxfd8679~qsbMO-2u1tCqxFfbRL2nYwhBZw~hbRwuJ6tquzOY8x6tDQxjiNvcxXzzUHSfmFy6NbIssWj-PHDeRa2hngWM5TZIg5Of6owSU0nDPU6fzrwZkngEjMczfmX8Kft-tTesZPw3YT4Zsm6wj1dg~g84JkdVT6Or-Z0S-GEqZ7JA2sFXvQhxBdYpVL2gTdXA__',
                author: {
                    name: 'Ugo Lombi',
                    profile_pic: 'https://s3-alpha-sig.figma.com/img/cdb9/c156/d7312632d8e9cc247b26cdd7abe33d50?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dV3J9Ozq-IwQJVbvuwfWAGLqn8o3~fiwJW6t58gAa3QN5PXKBi3Nxfj0CJsNErw7h9Y9u7sCtABzS2WGP2~~pPYDn3Wb5kGxunZo7NdRFZd3GCltdNdpRv3QUf4JhJUXqmd6xIs0Wll2u-AI-zLK01n0oQDQ1Rv4vcAUI6k4roSkpg5b8CGpAJI1qjdYbGN6-Y8j1mf1vdvUDB2v4jr3UYwVHt5VtH1uFtqm6exe3MX7btICUd0s2sq7wbp53JIrPViLfMntnjpUgtap8eP9t-8YsFdy94Teio9QRanR4Y4sYNd03kdYAjPN5l44J-P7EsqVA~8APt54bdzFSr7SWg__'
                },
                date: '14 luglio 2022'
            },
            {
                id: 3,
                title: "Roccella Jonica, la Lampedusa che l'Italia ignora",
                tag: {
                    label: "Migranti",
                    color: "#FFFFFF"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+1",
                author: {
                    name: "Alessandro Puglia",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+1"
                },
                date: "29 giugno 2022"
            },
            {
                id: 4,
                title: "Innovazioni tecnologiche nel 2023",
                tag: {
                    label: "Tecnologia",
                    color: "#FF5733"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+2",
                author: {
                    name: "Maria Rossi",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+2"
                },
                date: "12 gennaio 2023"
            },
            {
                id: 5,
                "title": "Il cambiamento climatico e le sue conseguenze",
                "tag": {
                    "label": "Ambiente",
                    "color": "#33FF57"
                },
                "imgUrl": "https://via.placeholder.com/600x400.png?text=News+Image+3",
                "author": {
                    name: "Giovanni Bianchi",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+3"
                },
                date: "5 marzo 2023"
            },
            {
                id: 6,
                title: "La nuova era della medicina personalizzata",
                tag: {
                    label: "Salute",
                    color: "#3357FF"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+4",
                author: {
                    name: "Laura Verdi",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+4"
                },
                date: "20 aprile 2023"
            },
            {
                id: 7,
                title: "Economia globale: sfide e opportunità",
                tag: {
                    label: "Economia",
                    color: "#FF33A1"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+5",
                author: {
                    name: "Luca Neri",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+5"
                },
                date: "15 maggio 2023"
            },
            {
                id: 8,
                title: "I segreti della cucina italiana",
                tag: {
                    label: "Cultura",
                    color: "#FFA833"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+6",
                author: {
                    name: "Sofia Gialli",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+6"
                },
                date: "10 giugno 2023"
            },
            {
                id: 9,
                title: "Esplorazioni spaziali: il futuro dell'umanità",
                tag: {
                    label: "Spazio",
                    color: "#33FFA8"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+7",
                author: {
                    name: "Marco Blu",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+7"
                },
                date: "25 luglio 2023"
            },
            {
                id: 10,
                title: "L'importanza dell'educazione nel mondo moderno",
                tag: {
                    label: "Educazione",
                    color: "#A833FF"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+8",
                author: {
                    name: "Elena Viola",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+8"
                },
                date: "30 agosto 2023"
            },
            {
                id: 11,
                title: "Arte contemporanea: tendenze e artisti",
                tag: {
                    label: "Arte",
                    color: "#FF5733"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+9",
                author: {
                    name: "Giorgio Arancio",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+9"
                },
                date: "12 settembre 2023"
            },
            {
                id: 12,
                title: "Il ruolo della politica nell'era digitale",
                tag: {
                    label: "Politica",
                    color: "#33A1FF"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+10",
                author: {
                    name: "Francesca Rosa",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+10"
                },
                date: "18 ottobre 2023"
            },
            {
                id: 13,
                title: "Nuovi sviluppi nella tecnologia blockchain",
                tag: {
                    label: "Tecnologia",
                    color: "#00FF00"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+13",
                author: {
                    name: "Fabio Giallo",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+13"
                },
                date: "22 novembre 2023"
            },
            {
                id: 14,
                title: "La sostenibilità nel design urbano",
                tag: {
                    label: "Ambiente",
                    color: "#008000"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+14",
                author: {
                    name: "Giulia Bianca",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+14"
                },
                date: "5 dicembre 2023"
            },
            {
                id: 15,
                title: "Nuove scoperte nell'archeologia moderna",
                tag: {
                    label: "Storia",
                    color: "#FFD700"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+15",
                author: {
                    name: "Lorenzo Verde",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+15"
                },
                date: "18 gennaio 2024"
            },
            {
                id: 16,
                title: "L'evoluzione del mercato delle criptovalute",
                tag: {
                    label: "Finanza",
                    color: "#0000FF"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+16",
                author: {
                    name: "Martina Azzurra",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+16"
                },
                date: "2 febbraio 2024"
            },
            {
                id: 17,
                title: "Il futuro delle energie rinnovabili",
                tag: {
                    label: "Energia",
                    color: "#FFA500"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+17",
                author: {
                    name: "Simone Rosso",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+17"
                },
                date: "15 marzo 2024"
            },
            {
                id: 18,
                title: "La rivoluzione dell'intelligenza artificiale",
                tag: {
                    label: "AI",
                    color: "#800080"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+18",
                author: {
                    name: "Chiara Viola",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+18"
                },
                date: "28 aprile 2024"
            },
            {
                id: 19,
                title: "Cambiamenti nel panorama politico globale",
                tag: {
                    label: "Politica",
                    color: "#FF4500"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+19",
                author: {
                    name: "Alberto Nero",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+19"
                },
                date: "12 maggio 2024"
            },
            {
                id: 20,
                title: "L'impatto del turismo sostenibile",
                tag: {
                    label: "Turismo",
                    color: "#2E8B57"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+20",
                author: {
                    name: "Federica Rosa",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+20"
                },
                date: "25 giugno 2024"
            },
            {
                id: 21,
                title: "Le nuove frontiere della biotecnologia",
                tag: {
                    label: "Biotech",
                    color: "#4682B4"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+21",
                author: {
                    name: "Davide Marrone",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+21"
                },
                date: "8 luglio 2024"
            },
            {
                id: 22,
                title: "L'arte del XXI secolo: innovazione e tradizione",
                tag: {
                    label: "Arte",
                    color: "#FF6347"
                },
                imgUrl: "https://via.placeholder.com/600x400.png?text=News+Image+22",
                author: {
                    name: "Sara Celeste",
                    profile_pic: "https://via.placeholder.com/150.png?text=Author+22"
                },
                date: "21 agosto 2024"
            }
        ]
    }
});