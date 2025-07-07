export default function () {
    const status = useState('status', () => true)

    const changeStatus = () => {
        status.value = !status.value
        console.log(status.value);
    }

    return { status, changeStatus }
}