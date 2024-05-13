# Phases in Component
* Mounting(loading) phase
* Updating phase
* Unmounting phase


# Class Components 
* First Phase:  constructor() -> render() -> componentDidMount (state change) -> render()(second time)

* Second Phase: render()(second time) -> componentDidUpdate()(next state change) -> render()(third + time on state change)

* Third phase: componentWillUnmount() (trigger in re-rendering and switching comp. using routing)

# Functional components
# Reusable components

# When to send props?
- sending data from parent to child
- sending methods from parent so some component(maybe third party comp.)
- sometime child comp. may have to trigger method of parent 