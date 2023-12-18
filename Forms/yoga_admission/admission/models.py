# models.py
from django.db import models

class Participant(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    selected_batch = models.CharField(max_length=10)
    payment_details = models.CharField(max_length=255)  # Add payment details field
    enrollment_date = models.DateField()  # Add enrollment date field
    enrolled_date = models.DateField(auto_now_add=True)
