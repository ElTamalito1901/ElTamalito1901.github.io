function filterRestaurants(category) {
            const cards = document.querySelectorAll('.restaurant-card:not(.add-new-card)');
            const buttons = document.querySelectorAll('.filter-btn');
            
            // Actualizar botones activos
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Filtrar tarjetas
            cards.forEach(card => {
                if (category === 'todos' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function selectRestaurant(id) {
            // Aquí iría la lógica para mostrar los detalles del restaurante seleccionado
            alert(`Has seleccionado el restaurante: ${id}`);
            // Podrías redirigir a una página de detalles o mostrar un modal
        }

        function openAddModal() {
            document.getElementById('addModal').style.display = 'block';
        }

        function closeAddModal() {
            document.getElementById('addModal').style.display = 'none';
            document.getElementById('addRestaurantForm').reset();
            document.getElementById('logoPreview').innerHTML = '📷 Haz clic para seleccionar imagen';
        }

        function previewLogo(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('logoPreview').innerHTML = 
                        `<img src="${e.target.result}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;"> Imagen seleccionada`;
                };
                reader.readAsDataURL(file);
            }
        }

        function goBack() {
        window.location.href = "../html/index.html";
        }

        // Manejo del formulario
        document.getElementById('addRestaurantForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('restaurantName').value;
            const category = document.getElementById('restaurantCategory').value;
            const description = document.getElementById('restaurantDescription').value;
            
            // Simulación de agregar el restaurante
            alert(`✅ Restaurante "${name}" agregado exitosamente!\n\nCategoría: ${category}\nDescripción: ${description}`);
            
            closeAddModal();
            
            // Aquí podrías agregar la lógica para actualizar la cuadrícula con el nuevo restaurante
        });

        // Cerrar modal al hacer clic fuera de él
        window.onclick = function(event) {
            const modal = document.getElementById('addModal');
            if (event.target == modal) {
                closeAddModal();
            }
        }

        // Animación CSS adicional
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);

        // Efectos de hover mejorados eliminados
        // document.addEventListener('mousemove', function(e) {
        //     const cards = document.querySelectorAll('.restaurant-card:not(.add-new-card)');
        //     cards.forEach(card => {
        //         const rect = card.getBoundingClientRect();
        //         const x = e.clientX - rect.left;
        //         const y = e.clientY - rect.top;
                
        //         if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        //             card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/15}deg) rotateY(${(rect.width/2 - x)/15}deg) translateY(-10px)`;
        //         } else {
        //             card.style.transform = '';
        //         }
        //     });
        // });