<template>
    <div class="flex align-items-center gap-16">
        <div class="profile-pic">
            <img src="https://s3-alpha-sig.figma.com/img/d518/a92d/e059a7a3367ff920d07e1938b4e8cd8f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ChsjmqjqnABwMOafW748YLYGkh9lQnqZ8WCCFOEr7b4nDpnoa-6kNR2waXbmth2Ii1xNVCFtYdoiP74RlHJWdgYJPg3NM10z2Y4C0bwwmTud~y4fiby7a2bKih86UXE8jhqrcQMWeFNTqAuyeb3FnNR58OClCR7eix0VbOIQ7jTVnh08rn7JBqe2S7PXS3mr5AWEKiIul-QKDzCMzgeCUed1DnrIa2hNP-Lrp8f-C8vaO0zx-5lvfeI3jr4MCW-kGfzmlHqkdKCKExn2k9y1-SNFK1lLyPkVApT-OIuwKlvxgXErDPp~a6PB6T1zSLhq8PXMqVOsvT4dWodGXOZXxg__">
        </div>
        <div>
            <p>
                <span class="name">Di Alessandro Puglia</span>
                <br>
                <span class="date">29 giugno 2022</span>
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.profile-pic {
    height: 42px;
    width: 42px;

    img {
        height: 100%;
        border-radius: 20px;
    }
}

p {
    color: white;
    font-weight: 400;
}

.name {
    font-size: 14px;
}

.date {
    font-size: 10px;
}

</style>