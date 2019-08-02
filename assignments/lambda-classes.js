// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name,
        this.age = attrs.age,
        this.location = attrs.location
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty,
        this.favLanguage = attrs.favLanguage,
        this.catchPhrase = attrs.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground,
        this.className = attrs.className,
        this.favSubjects = attrs.favSubjects
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(student, subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Student {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName,
        this.favInstructor = attrs.favInstructor
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const sean = new Instructor({
    name: "Sean",
    age: 28,
    location: "California",
    specialty: "C",
    favLanguage: "Python",
    catchPhrase: "Does that make sense?"
})

const josh = new Instructor({
    name: "Josh",
    age: 32,
    location: "Oregon",
    specialty: "React",
    favLangauge: "JavaScript",
    catchPhrse: "Want me to play my banjo."
})

const daniel = new Student({
    name: "Daniel",
    age: 28,
    location: "Florida",
    previousBackground: "HTML and CSS",
    className: "Web22",
    favSubjects: ["JavaScript", "Python"]
})

const matthew = new Student({
    name: "Matthew",
    age: 28,
    location: "Georgia",
    previousBackground: "Military",
    className: "Web22",
    favSubjects: ["Java", "Python"]
})

const gustavo = new ProjectManager({
    name: "Gustavo",
    age: 32,
    location: "Georgia",
    previousBackground: "Graphic Design",
    className: "Web22",
    favSubjects: ["Java", "Python"],
    gradClassName: "Web20",
    favInstructor: "Sean"
})

const justin = new ProjectManager({
    name: "Justin",
    age: 24,
    location: "Lousiana",
    previousBackground: "Project Manager",
    className: "Web14",
    favSubjects: ["JavaScript", "Python"],
    gradClassName: "Web12",
    favInstructor: "Josh"
})

console.log("----");
sean.speak();
sean.demo("Python");
sean.grade(daniel, "Python")
console.log("----");
josh.speak();
josh.demo("React");
josh.grade(matthew, "React");
console.log("----");
daniel.speak();
daniel.listsSubjects();
daniel.PRAssignment(daniel, "Python");
daniel.sprintChallenge(daniel, "Python");
console.log("----");
matthew.speak();
matthew.listsSubjects();
matthew.PRAssignment(matthew, "Python");
matthew.sprintChallenge(matthew, "Python");
console.log("----");
gustavo.speak();
gustavo.standUp("Web22_gustavo");
gustavo.debugsCode(daniel, "Python");
console.log("----");
justin.speak();
justin.standUp("Web14_justin");
justin.debugsCode(matthew, "Python");
console.log("----");