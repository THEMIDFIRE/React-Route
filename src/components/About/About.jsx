import Divider from "../Divider/Divider"

function About() {
    return (
        <>
            <section className="bg-dark-subtle py-5">
                <div className="container my-5">
                    <div className="py-5">
                        <h2 className="h1 text-uppercase text-center fw-bold mb-4 mt-4">about component</h2>
                        <Divider />
                        <div className="row mt-3 mb-5 mx-5">
                            <div className="col-md-6">
                                <div className="inner px-3">
                                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="inner px-3">
                                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About
