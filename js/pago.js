        // Función para abrir el modal
        function openModal() {
            document.getElementById('paymentModal').classList.add('active');
            document.body.style.overflow = 'hidden'; // Evitar scroll del body
        }

        // Función para cerrar el modal
        function closeModal() {
            document.getElementById('paymentModal').classList.remove('active');
            document.body.style.overflow = 'auto'; // Restaurar scroll del body
        }

        // Función para procesar el pago
        function processPayment() {
            const cardNum = document.getElementById('modalCardNum').value;
            const cardName = document.getElementById('modalCardName').value;
            const expiry = document.getElementById('modalExpiry').value;
            const cvv = document.getElementById('modalCvv').value;
            const email = document.getElementById('modalEmail').value;

            if (!cardNum || !cardName || !expiry || !cvv || !email) {
                alert('Por favor, completa todos los campos');
                return;
            }

            alert('¡Pago procesado exitosamente! 🎉\nPedido confirmado');
            closeModal();
        }

        // Cerrar modal al hacer clic fuera de él
        document.getElementById('paymentModal').onclick = function(e) {
            if (e.target === this) {
                closeModal();
            }
        }

        // Alternar métodos de pago
        document.getElementById('creditCardOption').onclick = function() {
            document.querySelectorAll('.payment').forEach(x => x.classList.remove('active'));
            this.classList.add('active');
            openModal(); // Abrir modal al seleccionar tarjeta
        };

        document.getElementById('cashOption').onclick = function() {
            document.querySelectorAll('.payment').forEach(x => x.classList.remove('active'));
            this.classList.add('active');
        };

        // Formatear número de tarjeta (modal)
        document.getElementById('modalCardNum').oninput = (e) => {
            let val = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
            e.target.value = val.replace(/(\d{4})(?=\d)/g, '$1 ').slice(0, 19);
        };

        // Formatear fecha (modal)
        document.getElementById('modalExpiry').oninput = (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2, 4);
            e.target.value = val;
        };

        // Solo números en CVV (modal)
        document.getElementById('modalCvv').oninput = (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
        };

        // Cerrar modal con tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
