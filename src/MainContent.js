import React, {Component} from 'react';

class MainContent extends Component {
    render() {
        return (
            <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Account Overview</h1>
                        </div>
                        {/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">

                            </ol>
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </div>
                <section className="content">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            {/* small card */}
                            <div className="small-box bg-gray-light">
                                <div className="inner">
                                    <h3>0</h3>
                                    <p>Account(s) Connected</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-shopping-cart" />
                                </div>
                                <a href="#" className="small-box-footer bg-gray-dark">
                                    Connect my Account <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small card */}
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>
                                        53,357<sup style={{ fontSize: 20 }}>$</sup>
                                    </h3>
                                    <p>Funds</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <a href="#" className="small-box-footer">
                                    More info <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small card */}
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>44</h3>
                                    <p>Open Position(s)</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-user-plus" />
                                </div>
                                <a href="#" className="small-box-footer">
                                    See Full List <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small card */}
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>High</h3>
                                    <p>Current Risk Level</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-chart-pie" />
                                </div>
                                <a href="#" className="small-box-footer">
                                    Risk Analysis <i className="fas fa-arrow-circle-right" />
                                </a>
                            </div>
                        </div>
                        {/* ./col */}
                    </div>
                    </div>

                </section>


            </div>
        )

    }
}

export default MainContent;