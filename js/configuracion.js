          function goBack() {
          window.location.href = "../html/index.html";
        }

        function testVoice() {
            const voiceEnabled = document.getElementById('voiceReading').checked;
            const voiceType = document.getElementById('voiceType').value;
            const voiceSpeed = document.getElementById('voiceSpeed').value;
            
            if (!voiceEnabled) {
                alert('La lectura de voz está desactivada. Actívala para probar.');
                return;
            }

            // Texto especial para Mariano Closs
            let testText = "Bienvenido a Sazón. Descubre tu próximo plato favorito y disfrútalo en familia.";
            
            if (voiceType === 'mariano-closs') {
                testText = "¡Y gooooool de sabor! Sazón presenta una jugada magistral con estos platos que van directo al ángulo del paladar. ¡Qué manera de definir el hambre!";
            }
            
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(testText);
                utterance.rate = parseFloat(voiceSpeed);
                utterance.lang = 'es-AR'; // Argentino para Mariano Closs
                
                // Configuración especial para simular a Mariano Closs
                if (voiceType === 'mariano-closs') {
                    utterance.pitch = 0.7; // Tono mucho más grave
                    utterance.rate = Math.max(0.7, parseFloat(voiceSpeed) * 0.8); // Más pausado y dramático
                    utterance.lang = 'es-AR'; // Español argentino
                } else if (voiceType === 'male') {
                    utterance.pitch = 0.8; // Tono grave para voz masculina
                }
                
                // Intentar seleccionar el tipo de voz
                const voices = speechSynthesis.getVoices();
                if (voices.length > 0) {
                    // Buscar voces en español primero
                    const spanishVoices = voices.filter(voice => 
                        voice.lang.startsWith('es') || voice.lang.includes('ES') || voice.lang.includes('AR')
                    );
                    
                    let preferredVoice = null;
                    if (spanishVoices.length > 0) {
                        if (voiceType === 'mariano-closs') {
                            // Buscar voz argentina masculina, más grave, o la más profunda disponible
                            preferredVoice = spanishVoices.find(voice => 
                                (voice.lang.includes('AR') || voice.lang.includes('Argentina')) ||
                                voice.name.toLowerCase().includes('argent') ||
                                voice.name.toLowerCase().includes('diego') ||
                                voice.name.toLowerCase().includes('carlos') ||
                                voice.name.toLowerCase().includes('deep') ||
                                voice.name.toLowerCase().includes('grave')
                            );
                            
                            // Si no encuentra argentina, buscar cualquier voz masculina grave
                            if (!preferredVoice) {
                                preferredVoice = spanishVoices.find(voice => 
                                    voice.name.toLowerCase().includes('male') ||
                                    voice.name.toLowerCase().includes('masculin') ||
                                    voice.name.toLowerCase().includes('man') ||
                                    voice.name.toLowerCase().includes('hombre')
                                );
                            }
                        } else if (voiceType === 'male') {
                            // Buscar voz masculina en español
                            preferredVoice = spanishVoices.find(voice => 
                                voice.name.toLowerCase().includes('male') || 
                                voice.name.toLowerCase().includes('masculin') ||
                                voice.name.toLowerCase().includes('diego') ||
                                voice.name.toLowerCase().includes('carlos') ||
                                voice.name.toLowerCase().includes('jorge')
                            );
                        } else {
                            // Buscar voz femenina
                            preferredVoice = spanishVoices.find(voice => 
                                voice.name.toLowerCase().includes('female') || 
                                voice.name.toLowerCase().includes('femenin') ||
                                voice.name.toLowerCase().includes('maria') ||
                                voice.name.toLowerCase().includes('carmen')
                            );
                        }
                        
                        // Si no encuentra por nombre, tomar la primera voz en español
                        if (!preferredVoice) {
                            preferredVoice = spanishVoices[0];
                        }
                    }
                    
                    if (preferredVoice) {
                        utterance.voice = preferredVoice;
                    }
                }
                
                speechSynthesis.speak(utterance);
            } else {
                alert('Tu navegador no soporta la síntesis de voz. La funcionalidad estará disponible en la app móvil.');
            }
        }

        function saveSettings() {
            // Recopilar todas las configuraciones
            const settings = {
                voiceReading: document.getElementById('voiceReading').checked,
                voiceType: document.getElementById('voiceType').value,
                voiceSpeed: document.getElementById('voiceSpeed').value,
                textSize: document.getElementById('textSize').value,
                highContrast: document.getElementById('highContrast').checked
            };

            // Simular guardado
            alert('Configuración guardada exitosamente!');
            console.log('Configuración guardada:', settings);
        }

        // Actualizar el display de velocidad de voz
        document.getElementById('voiceSpeed').addEventListener('input', function(e) {
            const speed = parseFloat(e.target.value);
            const description = e.target.parentElement.previousElementSibling.querySelector('.config-description');
            description.textContent = `Velocidad: ${speed}x`;
        });

        // Cargar voces disponibles y configurar la mejor opción
        if ('speechSynthesis' in window) {
            speechSynthesis.onvoiceschanged = function() {
                const voices = speechSynthesis.getVoices();
                const spanishVoices = voices.filter(voice => 
                    voice.lang.startsWith('es') || voice.lang.includes('ES') || voice.lang.includes('AR')
                );
                
                // Buscar voces masculinas y graves
                const maleVoices = spanishVoices.filter(voice => 
                    voice.name.toLowerCase().includes('male') ||
                    voice.name.toLowerCase().includes('masculin') ||
                    voice.name.toLowerCase().includes('man') ||
                    voice.name.toLowerCase().includes('diego') ||
                    voice.name.toLowerCase().includes('carlos') ||
                    voice.name.toLowerCase().includes('jorge')
                );
                
                console.log('Voces en español disponibles:', spanishVoices.length);
                console.log('Voces masculinas encontradas:', maleVoices.length);
                console.log('Voces españolas:', spanishVoices.map(v => ({name: v.name, lang: v.lang})));
            };
            
            // Cargar voces inmediatamente si ya están disponibles
            setTimeout(() => {
                speechSynthesis.getVoices();
            }, 100);
        }