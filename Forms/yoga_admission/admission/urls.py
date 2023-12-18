from django.urls import path
from .views import enroll_participant

urlpatterns = [
    path('enroll/', enroll_participant, name='enroll_participant'),
]
