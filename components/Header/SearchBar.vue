<template>
    <div class="flex justify-between">
        <!-- hamburger meni -->
        <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 4.4C3.15817 4.4 2.8 4.75817 2.8 5.2C2.8 5.64183 3.15817 6 3.6 6H16.4C16.8418 6 17.2 5.64183 17.2 5.2C17.2 4.75817 16.8418 4.4 16.4 4.4H3.6ZM2.8 10C2.8 9.55817 3.15817 9.2 3.6 9.2H16.4C16.8418 9.2 17.2 9.55817 17.2 10C17.2 10.4418 16.8418 10.8 16.4 10.8H3.6C3.15817 10.8 2.8 10.4418 2.8 10ZM2.8 14.8C2.8 14.3582 3.15817 14 3.6 14H16.4C16.8418 14 17.2 14.3582 17.2 14.8C17.2 15.2418 16.8418 15.6 16.4 15.6H3.6C3.15817 15.6 2.8 15.2418 2.8 14.8Z" fill="#E63036"/>
            </svg>
        </div>
        <div class="flex-grow" />
        <!-- search -->
        <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_1596)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07691 3.23077C5.84817 3.23077 3.23077 5.84817 3.23077 9.07691C3.23077 12.3056 5.84817 14.9231 9.07691 14.9231C12.3056 14.9231 14.9231 12.3056 14.9231 9.07691C14.9231 5.84817 12.3056 3.23077 9.07691 3.23077ZM2 9.07691C2 5.16844 5.16844 2 9.07691 2C12.9854 2 16.1538 5.16844 16.1538 9.07691C16.1538 12.9854 12.9854 16.1538 9.07691 16.1538C5.16844 16.1538 2 12.9854 2 9.07691Z" fill="#E63036"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2109 13.211C13.4512 12.9707 13.8408 12.9707 14.0812 13.211L17.8196 16.9495C18.0599 17.1898 18.0599 17.5794 17.8196 17.8198C17.5793 18.0601 17.1896 18.0601 16.9493 17.8198L13.2109 14.0813C12.9705 13.841 12.9705 13.4513 13.2109 13.211Z" fill="#E63036"/>
                </g>
                <defs>
                <clipPath id="clip0_1_1596">
                <rect width="16" height="16" fill="white" transform="translate(2 2)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </div>
</template>

<style scoped lang="scss">
.flex {
    div {
        border: 0.5px solid black;
        padding: 16px;
    }
}

@media screen and (min-width: 768px) {
    .flex {
        div {
            padding: 40px;
        }
    }
}
</style>