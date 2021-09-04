import React from 'react'
import Header from "../../DumbComponents/Header";



const LayoutHoc = Component => {
    class HOC extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <Header/>
                    <Component {...this.props} />
                </React.Fragment>
            )
        }
    }
    return HOC
}
export default LayoutHoc;
