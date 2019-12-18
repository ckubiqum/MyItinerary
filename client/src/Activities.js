import React from 'react';
import { connect } from 'react-redux';
import { fetchActivities } from './store/actions/activityAction';
// import { image } from "./assets/'+' {activity.image}";


class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            activities: [],

        };
    }

    componentWillReceiveProps(newProps) {
        console.log("old: ", this.props)
        console.log("new: ", newProps)
        this.setState({
            activities: newProps.activities
        })
    }

    componentDidMount() {
        console.log("props: ", this.props)
        this.props.fetchActivities(this.props.itiId);
    }

    render() {
        console.log(this.props.itiId);

        const { error, activities } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (activities.length === 0) {
            return <div>Loading...</div>;
        } else {
            return (

                <div className="activity-list">


                    {activities.map(activity => (
                        <p key={activity._id}>
                            {/* <img src={image} className="activity-image" alt="activity" /><br></br> */}
                            {activity.name} - {activity.cost}
                        </p>
                    ))}
                </div>
            );
        }
    }
}
const mapStateToProps = state => ({
    activities: state.activities.activities
});

export default connect(mapStateToProps, { fetchActivities })(Activities)