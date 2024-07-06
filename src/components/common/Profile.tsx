import Image from 'next/image'

const Profile = ({ images }: { images: string }) => {
    return (
        <Image
            className='rounded-xl'
            style={{ border: '2px solid transparent', background: "linear-gradient(90deg, rgba(31, 161, 255, 1), rgba(106, 18, 250, 1), rgba(184, 166, 255, 1)) border-box" }}
            src={images}
            alt={'Avatar'}
            width={56}
            height={56}
        />
    )
}

export default Profile
