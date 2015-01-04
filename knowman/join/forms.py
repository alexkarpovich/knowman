from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class RegistrationForm(UserCreationForm): 
   email = forms.EmailField(label=("e-mail")) 

   class Meta: 
      model = User 
      fields = ('username', 'email','password2') 

   def clean_email(self): 
        email = self.cleaned_data["email"] 
        try: 
            User.objects.get(email=email) 
        except User.DoesNotExist: 
            return email 
        raise forms.ValidationError(("e-mail already exist.")) 
	