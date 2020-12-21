import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
    title: yup.string()
    .required()
    .min(4),
    authors: yup.string()
    .required()
    .min(8),
    price: yup.string()
    .required()
    .min(2),
    thumbnail: yup.string()
    .required()
    .min(8),
    description: yup.string()
    .required()
    .min(5),
});

export default function ReviewForm({ addReview }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', authors: '', price: '', thumbnail: '', description: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {props => (
          <View>
          <Text style={globalStyles.title}> Enter the Book Details:</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='  Title of the book'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='  Name of the Authors'
              onChangeText={props.handleChange('authors')}
              value={props.values.authors}
              onBlur={props.handleBlur('authors')}
            />
            <Text style={globalStyles.errorText}>{props.touched.authors && props.errors.authors }</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='  Price of the book'
              onChangeText={props.handleChange('price')}
              value={props.values.price}
              onBlur={props.handleBlur('price')}
            />
            <Text style={globalStyles.errorText}>{props.touched.price && props.errors.price }</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='  Image URL'
              onChangeText={props.handleChange('thumbnail')}
              value={props.values.thumbnail}
              onBlur={props.handleBlur('thumbnail')}
            />
            <Text style={globalStyles.errorText}>{props.touched.thumbnail && props.errors.thumbnail }</Text>

            <TextInput 
            multiline minHeight={60}
              style={globalStyles.input}
              multiline
              placeholder='  Description of the book'
              onChangeText={props.handleChange('description')}
              value={props.values.description}
              onBlur={props.handleBlur('description')}
            />
            <Text style={globalStyles.errorText}>{props.touched.description && props.errors.description }</Text>
            
            <FlatButton onPress={props.handleSubmit} text='submit' /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}