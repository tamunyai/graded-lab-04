import { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FormContext } from '../../contexts/FormContext';
import { Spacing } from '../../constants';
import MainHeader from '../../components/MainHeader';
import Divider from '../../components/Divider';

function ProfileScreen() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { formData } = useContext(FormContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <MainHeader title="Profile" icon='toggle-off' onPress={toggleTheme} />
      <Divider />
      <View style={styles.section}>
        <Text style={[styles.label, { color: theme.text }]}>Name:</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formData.userDetails.name}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: theme.text }]}>Email:</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formData.userDetails.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: theme.text }]}>Phone Number:</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formData.userDetails.phoneNumber}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: theme.text }]}>Address:</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formData.addressDetails.address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: theme.text }]}>City:</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formData.addressDetails.city}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: theme.text }]}>State:</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formData.addressDetails.state}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: theme.text }]}>Zip Code:</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formData.addressDetails.zip}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: theme.text }]}>Credit Card Number:</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formData.paymentDetails.cardNumber}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: theme.text }]}>Expiration Date:</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formData.paymentDetails.expiry}</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.label, { color: theme.text }]}>CVV:</Text>
        <Text style={[styles.value, { color: theme.text }]}>{formData.paymentDetails.cvv}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.large,
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default ProfileScreen;
