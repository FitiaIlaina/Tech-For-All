import MobileBanner from "./MobileBanner";

export default function MobileHome() {
    return (
        <>
            <header>
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                    <div className="container"><a className="navbar-brand" href="#">Tech For All</a>
                        
                    </div>
                </nav>
            </header>
            <section>
                <MobileBanner/>
            </section>
        </>
    )
}