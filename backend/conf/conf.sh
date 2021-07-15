
sudo cp tlubenov.service /etc/systemd/system/
sudo systemctl start tlubenov.service
sudo systemctl enable tlubenov.service
sudo systemctl restart tlubenov.service

sudo cp tlubenov /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/tlubenov /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx

sudo ufw delete allow 5000
sudo ufw allow 'Nginx Full'
