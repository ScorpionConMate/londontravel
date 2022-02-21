import React, { useState, useEffect } from 'react'
import { ApiClient } from 'adminjs'
import { Box } from '@adminjs/design-system'

const api = new ApiClient()

const Dashboard = () => {

    return (
        <Box variant="grey">
            <Box variant="white">
                some dashboard
            </Box>
        </Box>
    )
}

export default Dashboard
