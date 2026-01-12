// DATA MANAGEMENT FUNCTIONS
const FirebaseData = {
    // Ambil data anggota
    async getAnggotaData(nia) {
        try {
            const docRef = db.collection('Anggota').doc(nia);
            const docSnap = await docRef.get();
            
            if (docSnap.exists) {
                return docSnap.data();
            } else {
                throw new Error('Data tidak ditemukan');
            }
        } catch (error) {
            console.error('Error getAnggotaData:', error);
            throw error;
        }
    },
    
    // Update data anggota
    async updateAnggotaData(nia, data) {
        try {
            await db.collection('Anggota').doc(nia).update({
                ...data,
                updated_at: new Date().toISOString(),
                last_update: new Date().toLocaleString('id-ID')
            });
            return true;
        } catch (error) {
            console.error('Error updateAnggotaData:', error);
            throw error;
        }
    },
    
    // Setup real-time listener
    setupRealtimeListener(nia, callback) {
        return db.collection('Anggota').doc(nia)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    callback(doc.data());
                }
            });
    }
};

// Export untuk global access
window.FirebaseData = FirebaseData;
