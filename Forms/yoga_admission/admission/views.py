from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Participant
from .serializers import ParticipantSerializer

@api_view(['GET','POST'])
def enroll_participant(request):
    if request.method == 'GET':
        participants = Participant.objects.all()
        serializer = ParticipantSerializer(participants, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ParticipantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Enrollment successful'}, status=201)
        return Response(serializer.errors, status=400)
