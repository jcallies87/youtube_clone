from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import ReplySerializer


# Create your views here.
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_replies(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    serializer = ReplySerializer(data=request.data)
    if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
