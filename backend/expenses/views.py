from django.contrib.auth.models import User, Group
from django.shortcuts import render
from rest_framework import viewsets
from .models import Expense
from .serializers import UserSerializer, GroupSerializer, ExpenseSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class ExpenseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer


def index(request):
    return render(request, 'expenses/dashboard.html')
