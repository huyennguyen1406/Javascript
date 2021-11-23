class Mouse {
    name
    weight
    speed
    state
    constructor(name, weight, speed, state) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.state = state;
    }
    setName(name) {
        this.name = name;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    setState(state) {
        this.state = state;
    }
}