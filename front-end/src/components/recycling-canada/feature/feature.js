import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Feature = () => {
    const history = useHistory();
    return (
        <div className="feature-section">
            <div className="feature-section-info">
                <h2>
                    Help Canada have green and clean land.
                    <strong>Explore our educational and informative platform.</strong>
                </h2>

                <div className="feature-list">
                    <div className="feature">
                        <img className="feature-image" src="./images/icons/waste-management.svg" />
                        <span className="feature-name">Waste Management</span>
                        <span className="feature-info">
                            Find nearest locations for your recycling
                            materials along with the items they receive and
                            how to get in touch with them.
                        </span>
                        {/* <Button className="feature-redirect-btn" component={Link} to="/waste-management">Manage</Button> */}
                        <button onClick={() => history.push("/waste-management")} className="feature-redirect-btn">Manage</button>
                    </div>

                    <div className="feature">
                        <img className="feature-image" src="./images/icons/challenge.svg" />
                        <span className="feature-name">Challenges</span>
                        <span className="feature-info">
                            With our quiz you can easily test your
                            knowledge and expertise in recycling and learn
                            new things with simple question and answer.
                        </span>
                        <button className="feature-redirect-btn">Go to Challenges</button>
                    </div>

                    <div className="feature">
                        <img className="feature-image" src="./images/icons/explore.svg" />
                        <span className="feature-name">Explore</span>
                        <span className="feature-info">
                            Find frequent questions and answers
                            and any related articles that can help you
                            expand your knowledge.
                        </span>
                        <button className="feature-redirect-btn">Go to Explore </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;