const ImpressionTrackable = (ChildComponent) => {
    return (props) => {
        //console.log('Impression Trackable Props',props);
        
        const handleUserClick = () =>{
            console.log('User Clicked : ' , ChildComponent.name);
            
        }

        const handleMouseEnter = () =>{
            console.log('Mouse Entered : ' , ChildComponent.name);
            
        }

        return (
            <div    onClick={handleUserClick} onMouseEnter={handleMouseEnter}>

                <ChildComponent { ...props} />
            </div>
        );
    }
}


export const SimpleComponent = ({x}) =>{
    return (
        <div>
            simpleComponent {x}
        </div>
    );
}


export const ImpressionTrackableSimpleStorage = ImpressionTrackable(SimpleComponent);
