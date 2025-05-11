import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Loader2, AlertCircle } from 'lucide-react';
import { banks } from '../../../data/banks';
import { Branch, Location } from '../../../types/bank';
import { getCurrentLocation, calculateDistance } from '../../../utils/location';
import Button from '../../ui/Button';

interface BranchWithDistance extends Branch {
  distance: number;
}

const BranchLocator: React.FC = () => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [branches, setBranches] = useState<BranchWithDistance[]>([]);
  const [selectedBank, setSelectedBank] = useState<string>('all');

  useEffect(() => {
    fetchUserLocation();
  }, []);

  const fetchUserLocation = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const location = await getCurrentLocation();
      setUserLocation(location);
      updateBranchList(location, selectedBank);
    } catch (err) {
      setError('Could not access your location. Please enable location services.');
      console.error('Location error:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateBranchList = (location: Location, bankId: string) => {
    let allBranches: BranchWithDistance[] = [];
    
    banks.forEach(bank => {
      if (bankId === 'all' || bank.id === bankId) {
        const branchesWithDistance = bank.branches.map(branch => ({
          ...branch,
          distance: calculateDistance(location, branch.location)
        }));
        allBranches = [...allBranches, ...branchesWithDistance];
      }
    });
    
    allBranches.sort((a, b) => a.distance - b.distance);
    setBranches(allBranches);
  };

  const handleBankChange = (bankId: string) => {
    setSelectedBank(bankId);
    if (userLocation) {
      updateBranchList(userLocation, bankId);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h3 className="text-xl font-semibold text-primary-700 flex items-center mb-4 sm:mb-0">
          <MapPin className="mr-2" size={24} />
          Nearby Bank Branches
        </h3>
        
        <div className="flex items-center space-x-4">
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            value={selectedBank}
            onChange={(e) => handleBankChange(e.target.value)}
          >
            <option value="all">All Banks</option>
            {banks.map(bank => (
              <option key={bank.id} value={bank.id}>{bank.name}</option>
            ))}
          </select>
          
          <Button
            variant="outline"
            onClick={fetchUserLocation}
            isLoading={loading}
          >
            Refresh Location
          </Button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
          <AlertCircle className="text-error-500 mr-2 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-error-500">{error}</p>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
        </div>
      ) : (
        <div className="space-y-4">
          {branches.map((branch) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-primary-700 mb-1">{branch.name}</h4>
                  <p className="text-gray-600 flex items-center mb-2">
                    <MapPin size={16} className="mr-1" />
                    {branch.address}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Phone size={14} className="mr-1" />
                      {branch.phone}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {branch.timings}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {branch.distance} km away
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          
          {branches.length === 0 && !loading && (
            <div className="text-center py-12 text-gray-500">
              No branches found in your area
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BranchLocator;