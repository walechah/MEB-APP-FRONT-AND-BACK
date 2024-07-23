import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { debounce } from "lodash";

const FaqScreen = () => {
  const navigation = useNavigation(); // Initialize navigation object
  const [input, setInput] = useState("");

  const faqs = [
    {
      question: "What is MyEasyPharma?",
      answer:
        "MyEasyPharma is a digital platform that offers personalized holistic healthcare solutions by merging traditional practices and modern research based to prevent lifestyle disorders and NCDs through a combination of AI technology and personal health coaching.",
    },
    {
      question: "How does MyEasyPharma benefit working professionals?",
      answer:
        "Working professionals looking forward to manage their health proactively will find our services particularly beneficial, especially those interested in personalized health monitoring and advice. Also blogs about ayurvedic tips and general health care tips can keep them updated.",
    },
    {
      question: "How do I create a personalized health profile?",
      answer:
        "You can create a profile by entering your health data, lifestyle habits, and preferences into the MyEasyPharma platform.",
    },
    {
      question: "What kind of health insights does MyEasyPharma provide?",
      answer:
        "The platform provides insights on diet, exercise, sleep, stress management, and other lifestyle factors to help improve your overall health. Also provides general health care tips integrating traditional wisdom.",
    },
    {
      question: "What are AI-driven recommendations?",
      answer:
        "These are personalized suggestions generated by our AI based on your health data, aimed at improving your well-being and preventing potential health issues.",
    },
    {
      question: "Can MyEasyPharma help with specific health conditions?",
      answer:
        "Yes, our platform can provide tailored recommendations and support for various health conditions, including diabetes, hypertension, obesity, hyperlipidemia and stress-related disorders.",
    },
    {
      question: "What kind of data do I need to input into the platform?",
      answer:
        "You will need to input data related to your diet, exercise habits, sleep patterns, stress levels, and any medical conditions or medications that you are currently prescribed.",
    },
    {
      question: "How often should I update my health data?",
      answer:
        "For the most accurate insights, we recommend updating your health data regularly, ideally weekly or whenever there are significant changes.",
    },
    {
      question: "How does MyEasyPharma help reduce workplace stress?",
      answer:
        "The platform provides stress management techniques, mindfulness exercises, ayurvedic herbs, recepies, yoga, pranayama and personalized advice based on your health condition to help manage and reduce workplace stress.",
    },
    {
      question: "Are there community features on MyEasyPharma?",
      answer:
        "Yes, you can connect with other users through our WhatsApp community forums, where you can share experiences, tips, and support.",
    },
    {
      question:
        "What makes MyEasyPharma different from other wellness platforms?",
      answer:
        "Our platform combines advanced AI, personalized coaching, and comprehensive health insights specifically tailored for working professionals, making it a unique and effective solution for preventive health.",
    },
    {
      question: "How does MyEasyPharma help prevent lifestyle diseases?",
      answer:
        "By analyzing your daily health inputs like stress levels, physical activities,sleep quality, and calorie intake, MyEasyPharma provides tailored advice and solutions designed to improve your overall health and prevent diseases.",
    },
    {
      question: "What if I have feedback or suggestions for the app?",
      answer:
        "We welcome feedback and suggestions! Please submit them via our customer service email info@myeasypharma.in.",
    },
    {
      question: "How can MyEasyPharma help me manage work-related stress?",
      answer:
        "MyEasyPharma provides tools to monitor your stress levels and offers customized strategies, such as guided meditation or time management tips, based on your specific stress triggers. You can skim through our articles and blogs to find simple herbs, yoga and meditation techniques that help you manage stress.",
    },
    {
      question:
        "What immediate steps does MyEasyPharma recommend if I’m feeling overwhelmed at work?",
      answer:
        "You can engage in a quick stress-relief activity such as deep-breathing exercises, pranayama, short walks, a cup of herbal ginger tea or listening to calming music, all of which you can do even during your busiest days.",
    },
    {
      question:
        "How does MyEasyPharma customize stress management approaches for different professions?",
      answer:
        "Based on the data you input, including your profession and daily schedules, MyEasyPharma tailors stress management plans that fit your specific career demands and lifestyle, ensuring relevance and effectiveness.",
    },
    {
      question: "Can MyEasyPharma help me improve my work-life balance?",
      answer:
        "Yes, our platform provides recommendations on time management, setting work boundaries, and scheduling downtime, which are essential for maintaining a healthy work-life balance.",
    },
    {
      question:
        "How does MyEasyPharma assist in overall health management for busy professionals?",
      answer:
        "We offer comprehensive health tracking, from diet and physical activity to sleep patterns, all tailored to fit a busy schedule and provide actionable insights for health improvement.",
    },
    {
      question: "How do I sign up for MyEasyPharma?",
      answer:
        "Visit our website or connect through our WhatsApp community, and sign up. You can ask any queries via our contact point (refer to the contact details below).",
    },
    {
      question: "What does MyEasyPharma cost?",
      answer:
        "We offer various subscription plans tailored to different needs and budgets. Details are available in our WhatsApp community .",
    },
    {
      question: "What is your privacy policy regarding data sharing?",
      answer:
        "We do not share your data with any third parties without your explicit consent. Your data regarding surveys will be collected as anonymous in case of general recommendation.More details are available in our privacy policy.",
    },
    {
      question: "What does MyEasyPharma offer for dietary management?",
      answer:
        "Our website includes dietary tips and analysis, provides meal suggestions to boost your energy levels. You can visit our blogs and LinkedIn account to know more.",
    },
    {
      question:
        "Can the AI in MyEasyPharma predict potential health risks for office workers?",
      answer:
        "Yes, by analyzing continuous data, our AI can predict potential health risks associated with sedentary lifestyles, such as cardiovascular diseases or musculoskeletal problems, offering preemptive recommendations based on the database available and updated.",
    },
    {
      question:
        "Can MyEasyPharma provide benchmarks for health performance within an industry?",
      answer:
        "Yes, we can provide industry-specific health benchmarks that help companies understand how they stand in terms of employee health compared to similar businesses.",
    },
    {
      question:
        "Is there support for mental health within MyEasyPharma’s corporate offerings?",
      answer:
        "We offer extensive support for mental health, including access to stress management content , mindfulness, and regular updates about traditional practices verified by scientists that are easy to integrate in daily life.",
    },
    {
      question:
        "Can MyEasyPharma's corporate wellness program help in reducing healthcare costs for companies",
      answer:
        "By fostering preventative health measures and enhancing overall employee wellness, our program helps reduce long-term healthcare costs through lower rates of absenteeism, increased productivity, and fewer health-related claims.",
    },
    {
      question: "How do I sign up for MyEasyPharma?",
      answer:
        "Visit our website or download our mobile app, and sign up by creating an account. You'll be guided through a simple setup process to start tracking your health data.",
    },
    {
      question: "Can I choose my personal health coach?",
      answer:
        "Yes, you can select a coach based on their expertise, background, and reviews from other users.",
    },
    {
      question: "What does MyEasyPharma cost?",
      answer:
        "We offer various subscription plans tailored to different needs and budgets. Details are available on our pricing page.",
    },
    {
      question: "How secure is my personal health data?",
      answer:
        "We use the latest encryption technologies to ensure your data is stored securely and comply with all relevant health data protection regulations.",
    },
    {
      question: "Who has access to my health records?",
      answer:
        "Your health data is accessible only to you and your chosen health coach, unless you opt to share it with other health providers.",
    },
    {
      question: "What is your privacy policy regarding data sharing?",
      answer:
        "We do not share your data with any third parties without your explicit consent. More details are available in our privacy policy.",
    },
    {
      question:
        "Are there specific features in MyEasyPharma that target stress reduction?",
      answer:
        "Yes, we offer features like stress tracking, mindfulness exercises, and personalized relaxation techniques guided by our health coaches to specifically help reduce stress.",
    },
    {
      question:
        "Can the app provide health notifications during my work hours?",
      answer:
        "Yes, you can set customizable notifications for health reminders, like drinking water, taking short active breaks, or mindfulness moments, that fit discreetly into your work schedule.",
    },
    {
      question: "What tools does MyEasyPharma offer for dietary management?",
      answer:
        "Our app includes dietary tracking and analysis, provides meal suggestions, and can even integrate with your calendar to suggest the best times for meals based on your work schedule.",
    },
    {
      question:
        "Does MyEasyPharma offer resources or tools for quitting smoking and other unhealthy habits common among professionals?",
      answer:
        "Yes, we provide motivational support, tracking tools, and access to health coaching for assistance in quitting smoking or managing other unhealthy habits.",
    },
    {
      question: "How secure is the AI with my health data?",
      answer:
        "We prioritize your privacy with advanced encryption and data protection protocols to ensure that all your health data remains secure and confidential.",
    },
    {
      question:
        "What features does MyEasyPharma offer for corporate wellness programs?",
      answer:
        "Our platform includes features like group health challenges, wellness leaderboards, customized health reports for HR departments, and tools for managing company-wide health events.",
    },
  ];

  // Initialize state with only the first question expanded
  const debouncedSearch = debounce(handleSearch, 800);
  const [expanded, setExpanded] = useState({ 0: true });

  const toggleExpand = (index) => {
    setExpanded({
      ...expanded,
      [index]: !expanded[index],
    });
  };
  function handleSearch(text) {
    // Implement search logic here
  }
  const handleInputChange = (text) => {
    setInput(text);
    debouncedSearch(text);
  };
  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <View style={styles.topRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.backButton}
            >
              <MaterialIcons name="arrow-back" size={30} color="#254336" />
            </TouchableOpacity>
            <Text style={styles.titleText}>FAQs</Text>
            <View style={styles.logoContainer}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </View>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search FAQs"
              value={input}
              onChangeText={handleInputChange}
            />
            <Ionicons
              name="search"
              size={23}
              color="#254336"
              style={styles.searchIcon}
            />
          </View>
          {/* Content Container */}
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* FAQ Content */}
            <View style={styles.content}>
              {filteredFAQs.map((faq, index) => (
                <View key={index} style={styles.faqContainer}>
                  {/* Question Row */}
                  <TouchableOpacity
                    style={styles.questionRow}
                    onPress={() => toggleExpand(index)}
                  >
                    <Text style={styles.questionText}>{faq.question}</Text>
                    <Ionicons
                      name={expanded[index] ? "chevron-up" : "chevron-down"}
                      size={24}
                      color="#254336"
                    />
                  </TouchableOpacity>
                  {/* Answer Row */}
                  {expanded[index] && (
                    <View style={styles.answerRow}>
                      <Text style={styles.answerText}>{faq.answer}</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Light overlay with 70% opacity
  },
  container: {
    flex: 1,
    paddingTop: 50, // Adjust this value to give some top padding
    paddingHorizontal: 20, // Adjust this value for horizontal spacing
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the row
    justifyContent: "space-between", // Space evenly between items
    marginBottom: 20, // Optional margin bottom for spacing
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 105,
    marginRight: -65,
  },
  titleText: {
    color: "#254336",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 120,
    //marginRight: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20, // Adjust this value to give some bottom padding for the last section
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  faqContainer: {
    marginBottom: 15,
  },
  questionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#25433640",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  questionText: {
    flex: 1,
    color: "#254336",
    fontSize: 20,
    fontWeight: "700",
  },
  answerRow: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    marginTop: 5,
  },
  answerText: {
    color: "#254336",
    fontSize: 20,
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    padding: 10,
  },
  settingsIcon: {
    padding: 10,
    marginLeft: 10, // Adjust spacing between icons
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    borderWidth: 1.5,
    borderColor: "#254336",
    paddingHorizontal: 10,
    height: 48,
    borderColor: "#254336",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: "#254336",
    fontWeight: "500",
    fontSize: 18,
  },
  searchIcon: {
    marginLeft: 10,
  },
  backButton: {
    marginLeft: -70,
    padding: 5, // Adjust the value as needed
  },
});

export default FaqScreen;
