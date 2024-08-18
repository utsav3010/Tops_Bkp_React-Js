import React from "react";

function Header() {
    return (
        <>
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-md-3">
                        <b>
                            <span className="bi bi-telephone" /> Call me : (+91)9998003879
                        </b>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search anything here.........."
                                className="form-control"
                            />
                            <button type="button" className="btn btn-dark text-white">
                                <span className="bi bi-search" />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <span className="bi bi-facebook ms-2 fs-5" />
                        <span className="bi bi-instagram ms-2 fs-5" />
                        <span className="bi bi-whatsapp ms-2 fs-5" />
                        <span className="bi bi-snapchat ms-2 fs-5" />
                        <span className="bi bi-twitter ms-2 fs-5" />
                    </div>
                </div>
            </div>

        </>
    )
}
export default Header