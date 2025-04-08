// Test script for contact form API (ESM format)
import fetch from 'node-fetch';

const testContactForm = async () => {
  try {
    const testData = {
      'first-name': 'Test',
      'last-name': 'User',
      'email': 'test@example.com',
      'company': 'Test Company',
      'phone': '555-555-5555',
      'country': 'United States',
      'project-type[Website Development]': true,
      'budget': '$2,000 - $10,000',
      'message': 'This is a test message for the contact form.'
    };

    console.log('Sending test data to contact form API...');
    
    const res = await fetch('http://localhost:3000/api/contact-form', {
      method: 'POST',
      body: JSON.stringify(testData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const data = await res.json();
    
    console.log('Status:', res.status);
    console.log('Response:', data);
    
    if (res.status === 200) {
      console.log('✅ Test successful! Your contact form API is working.');
    } else {
      console.log('❌ Test failed. Check the response for details.');
    }
  } catch (error) {
    console.error('Error during test:', error);
  }
};

testContactForm(); 