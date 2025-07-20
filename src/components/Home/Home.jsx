import Avatar from "../Avatar/Avatar"
import Divider from "../Divider/Divider"

// import Avatar from '../../assets/avataaars.svg'
function Home() {
    return (
        <header className="p-5 bg-dark-subtle">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-6">
                        <Avatar />
                        {/* <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light' /> */}
                        <h1 className="text-center text-uppercase fw-bold mb-3 mt-3">start framework</h1>
                        <Divider />
                        <div className="info d-flex justify-content-center align-items-center mt-3">
                            <p className="text-capitalize">graphic artist</p>
                            <p className="text-capitalize">web designer</p>
                            <p className="text-capitalize">illustrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home
