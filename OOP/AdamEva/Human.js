class Human {
    name
    gender
    weight

    constructor (name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender === "Male" ? true : false;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(Apple) {
        return Apple.isEmpty() ? true : false;
    }

    eat(Apple) {
        if (this.checkApple(Apple)) {
            this.say("Mieng cuoi cung, Eva an");
        } else {
            this.say("Tao het roi, tim qua khac");
        }
        Apple.decrease();
        this.weight++;
    }

}