from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'series', views.SerieViewSet)
router.register(r'categories', views.CategoryViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),  # Asegúrate de que el prefijo api/v1 esté incluido
    path('api/v1/login/',views.LoginView.as_view(), name='login'),
]
