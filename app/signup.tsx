import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
  const [countryCode, setCountryCode] = React.useState("+1");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const onSignUp = async () => {};
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get stared</Text>
      <Text style={defaultStyles.descriptionText}>Enter your phone number. We will send you a confirmation code</Text>
      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          placeholder="Country code"
          placeholderTextColor={Colors.gray}
          value={countryCode}
          keyboardType="phone-pad"
          onChangeText={setCountryCode}
        />
        <TextInput
          style={[styles.input, { flex: 1}]}
          placeholder="Phone number"
          placeholderTextColor={Colors.gray}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  }
}
);

export default Page;
