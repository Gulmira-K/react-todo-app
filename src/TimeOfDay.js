
export default function TimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay = "";
    const styles = {
        fontSize: 40,
    }

    if (hours < 12) {
        timeOfDay = "morning 🌞";
        styles.color = "#df5e88";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon 😎";
        styles.color = "blueviolet";
    } else {
        timeOfDay = "night ✨";
        styles.color = "#006a71";
    }
  
    return (
        <h1 style={styles}>Good {timeOfDay}</h1> 
    )
}